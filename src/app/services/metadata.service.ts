import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { units } from './../core/types';
import { FireService } from './fire.service';

export interface Styles {
  width: number;
  height: number;
  units: units;
}
export interface Metadata {
  id: number;
  content: string;
  typeContent: 'text' | 'image';
  className: string;
  styles: Styles;
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
