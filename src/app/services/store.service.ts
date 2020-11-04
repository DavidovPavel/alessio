import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IStoreItem } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  points = ['project', 'category', 'color', 'collection', 'size'];
  store = new Map<string, IStoreItem[]>();

  constructor(private fs: AngularFirestore, private router: Router) {}

  // if (this.colSize)
  //   this.fs
  //     .collection<IStoreItem>('size', (ref) => ref.orderBy('id'))
  //     .get()
  //     .pipe(
  //       map((a) => a.docs.map((b) => b.data() as IStoreItem)),
  //       map((a) => a.filter((s) => this.colSize.includes(s.id))),
  //     )
  //     .subscribe((a) => (this.sizes = a));

  getCollection(value: number, index: number) {
    return this.fs
      .collection<IStoreItem>(this.points[index], (ref) =>
        ref.where('id', '==', value).orderBy('id'),
      )
      .get()
      .pipe(
        tap((a) =>
          this.store.set(
            this.points[index],
            a.docs.map((b) => b.data() as IStoreItem),
          ),
        ),
        map((a) => a.docs[0].data() as IStoreItem),
        // tap((a) => (this.currentSizes = this.currentSizes || a.size)),
      );
  }

  getPoints(params: string[]) {
    if (params[1] === '3') this.points = ['project', 'category', 'size'];
    const stores = params.map((v, i) => this.getCollection(+v, i));
    return forkJoin(stores);
  }

  getLink(param: string[]) {
    return this.router.createUrlTree(['/buy/catalog', ...param]).toString();
  }
}
