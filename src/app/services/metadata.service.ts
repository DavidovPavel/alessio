import { Observable } from 'rxjs';
import { FireService } from './fire.service';
import { Injectable } from '@angular/core';

export interface Metadata {
  id: number;
  content: string;
  typeContent: 'text' | 'image';
  className: string;
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
