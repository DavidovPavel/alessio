import { concatAll, filter, toArray } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FireService } from './fire.service';

export interface Video {
  id: number;
  section: 'Projects' | 'Interviews' | 'The principles of decorating';
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  collection: Observable<Video[]>;

  constructor(fire: FireService) {
    this.collection = fire.getCollection<Video>('video', (ref) => ref.orderBy('id'));
  }

  getProjects(): Observable<Video[]> {
    return this.collection.pipe(
      concatAll(),
      filter((a) => a.section === 'Projects'),
      toArray()
    );
  }

  getInterviews(): Observable<Video[]> {
    return this.collection.pipe(
      concatAll(),
      filter((a) => a.section === 'Interviews'),
      toArray()
    );
  }

  getPrinciples(): Observable<Video[]> {
    return this.collection.pipe(
      concatAll(),
      filter((a) => a.section === 'The principles of decorating'),
      toArray()
    );
  }
}
