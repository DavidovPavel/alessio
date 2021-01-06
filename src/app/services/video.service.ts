import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { concatAll, filter, shareReplay, switchMap, take, toArray } from 'rxjs/operators';

import { FireService } from './fire.service';

export interface Video {
  id: number;
  section: VideoSections;
  title: string;
  author: string;
}

export enum VideoSections {
  'project' = 'Projects',
  'interviw' = 'Interviews',
  'principle' = 'The principles of decorating',
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  collection: Observable<Video[]>;

  constructor(private fire: FireService) {
    this.collection = this.fire.getCollection<Video>('video', (ref) => ref.orderBy('id'));
  }

  getAll(): Observable<Video[]> {
    return this.collection;
  }

  getProjects(): Observable<Video[]> {
    return this.getVideoByFilter(VideoSections.project);
  }

  getInterviews(): Observable<Video[]> {
    return this.getVideoByFilter(VideoSections.interviw);
  }

  getPrinciples(): Observable<Video[]> {
    return this.getVideoByFilter(VideoSections.principle);
  }

  getVideoByFilter(section: VideoSections): Observable<Video[]> {
    return this.collection.pipe(
      concatAll(),
      filter((a) => a.section === section),
      toArray(),
      shareReplay()
    );
  }

  getOneByParam() {
    return switchMap((p: ParamMap) => this.getOneById(+p.get('id')));
  }

  getOneById(id: number): Observable<Video> {
    return this.collection.pipe(
      concatAll(),
      filter((a) => a.id === id),
      take(1)
    );
  }
}
