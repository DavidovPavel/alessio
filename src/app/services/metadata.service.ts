import { Injectable } from '@angular/core';
import { ContentInfo } from '@app/core/models/content-info';
import { StyleSet } from '@app/shared/carusel/slider.service';
import { Observable } from 'rxjs';

import { FireService } from './fire.service';

export interface Medadata extends ContentInfo {
  styles: StyleSet;
}

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  collection: Observable<Medadata[]>;
  constructor(private fire: FireService) {
    this.collection = this.fire.getCollection('metadata', (ref) => ref.orderBy('id'));
  }

  getAll(): Observable<Medadata[]> {
    return this.collection;
  }
}
