import { Injectable } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { concatAll, filter, share, shareReplay, switchMap, take, toArray } from 'rxjs/operators';

import { FireService } from './fire.service';

export type videoSection = 'Projects' | 'Interviews' | 'The principles of decorating';
export interface Video {
  id: number;
  section: videoSection;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'any',
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
    return this.getVideoByFilter('Projects');
  }

  getInterviews(): Observable<Video[]> {
    return this.getVideoByFilter('Interviews');
  }

  getPrinciples(): Observable<Video[]> {
    return this.getVideoByFilter('The principles of decorating');
  }

  getVideoByFilter(section: videoSection): Observable<Video[]> {
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
