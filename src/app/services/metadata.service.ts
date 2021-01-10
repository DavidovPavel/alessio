import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StyleSet } from '../public/metadata/carousel/slider.service';
import { FireService } from './fire.service';

export interface Metadata {
  id: number;
  content: string;
  typeContent: 'text' | 'image';
  className: string;
  styles: StyleSet;
}

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  collection: Observable<Metadata[]>;
  constructor(private fire: FireService) {
    this.collection = this.fire.getCollection('metadata', (ref) => ref.orderBy('id'));
  }

  getAll(): Observable<Metadata[]> {
    return this.collection;
  }
}
