import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private fs: AngularFirestore) {}

  getCollection<T>(name: string, queryFn?: QueryFn): Observable<T[]> {
    return this.fs
      .collection<T>(name, queryFn)
      .get()
      .pipe(map((a) => a.docs.map((b) => b.data())));
  }

  getDocument<T>(path: string): Observable<T> {
    return this.fs
      .doc<T>(path)
      .get()
      .pipe(map((a) => a.data()));
  }
}
