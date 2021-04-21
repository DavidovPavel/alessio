import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ListItem } from '@app/buy/list-item';
import { groupByFour } from '@app/core/func';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private fs: AngularFirestore) {}

  getCollectionRef(name: string): AngularFirestoreCollection {
    return this.fs.collection(name);
  }

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

  getGroup<T>(name: string, groupBy = 'pos'): Observable<T[][]> {
    return this.getCollection<T>(name, (ref) => ref.orderBy(groupBy)).pipe(
      map((store) =>
        store.reduce(groupByFour, []).map((a) => (a.length === 2 ? [{}, ...a, {}] : a.length === 3 ? [...a, {}] : a))
      )
    );
  }
}
