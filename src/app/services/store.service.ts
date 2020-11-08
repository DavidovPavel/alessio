import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, map, share } from 'rxjs/operators';

import { IBaseProduct, IProduct, IStoreItem } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = new Map<string, IStoreItem[]>();

  constructor(private fs: AngularFirestore, private router: Router) {}

  getStoreByIds(name: string, ids: number[]): Observable<IStoreItem[]> {
    if (this.store.has(name)) {
      const item = this.store.get(name).filter((a) => ids.includes(a.id));
      return of(item);
    } else {
      return this.getCollection(name).pipe(
        map((a) => a.filter((b) => ids.includes(b.id))),
      );
    }
  }

  getProductById(id: number): Observable<IProduct> {
    const projects = (pid: number[]) => this.getStoreByIds('project', pid);
    const sizes = (sid: number[]) => this.getStoreByIds('size', sid);

    const product = this.fs
      .collection<IBaseProduct>('products', (ref) => ref.where('id', '==', id))
      .valueChanges()
      .pipe(
        map((a) => a[0]),
        concatMap((a) =>
          projects([a.project]).pipe(map((b) => ({ ...a, project: b[0] }))),
        ),
        concatMap((a) =>
          sizes(a.size).pipe(
            map((size: IStoreItem[]) => ({
              ...a,
              size,
            })),
          ),
        ),
      );

    return product;
  }

  // if (this.colSize)
  //   this.fs
  //     .collection<IStoreItem>('size', (ref) => ref.orderBy('id'))
  //     .get()
  //     .pipe(
  //       map((a) => a.docs.map((b) => b.data() as IStoreItem)),
  //       map((a) => a.filter((s) => this.colSize.includes(s.id))),
  //     )
  //     .subscribe((a) => (this.sizes = a));

  getCollection(name: string) {
    return this.fs
      .collection<IStoreItem>(name, (ref) => ref.orderBy('id'))
      .get()
      .pipe(
        map((a) => a.docs.map((b) => b.data() as IStoreItem)),
        share(),
      );
  }

  getPoints(params: string[]) {
    let points = ['project', 'category', 'color', 'collection', 'size'];
    if (params[1] === '3') points = ['project', 'category', 'size'];
    const stores = params
      .filter((_, i) => i < points.length)
      .map((v, i) =>
        this.getCollection(points[i]).pipe(
          map((a) => a.find((b) => b.id === +v)),
        ),
      );
    return forkJoin(stores);
  }

  getLink(param: string[]) {
    return this.router.createUrlTree(['/buy/catalog', ...param]).toString();
  }
}
