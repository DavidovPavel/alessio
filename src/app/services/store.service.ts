import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, filter, map, mergeMap, tap } from 'rxjs/operators';

import { Product } from '../core/models/product';
import { IStoreItem } from '../core/models/store-item';
import { ICurrentItem } from './../core/models/ICurrentItem';
import { ILinkParams } from './../core/models/ILinkParams';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = new Map<string, IStoreItem[]>();

  constructor(private fs: AngularFirestore) {}

  getStoreByName(name: string): Observable<IStoreItem[]> {
    return this.store.has(name) ? of(this.store.get(name)) : this.getCollection(name);
  }

  getCollection(name: string) {
    return this.fs
      .collection<IStoreItem>(name, (ref) => ref.orderBy('pos'))
      .get()
      .pipe(
        map((a) => a.docs.map((b) => b.data() as IStoreItem)),
        tap((a) => this.store.set(name, a))
      );
  }

  getCountProducts(): Observable<number> {
    return this.fs
      .collection('products')
      .get()
      .pipe(map((a) => a.docs.filter((b) => (b.data() as Product).id).length));
  }

  getCurrentItem(param: ParamMap): Observable<ICurrentItem> {
    const cid = +param.get('id');

    const linkFromProduct = (a: Product): ILinkParams => {
      const { project, category, color, collection, size, id } = a;
      return { project, category, color, collection, size, id };
    };

    const link = (id: number) => this.getItemById<Product>(id, 'products').pipe(map((a) => linkFromProduct(a)));

    return this.getCountProducts().pipe(
      tap((a) => console.log(a)),
      map((count) => ({
        next: cid < count ? cid + 1 : 1,
        prev: cid > 1 ? cid - 1 : count,
      })),
      concatMap((a) => link(a.next).pipe(map((b) => ({ next: b, prev: a.prev })))),
      concatMap((a) => link(a.prev).pipe(map((b) => ({ next: a.next, prev: b })))),
      concatMap((a) => this.getProductById(cid).pipe(map((b) => ({ next: a.next, prev: a.prev, current: b }))))
    );
  }

  getItemById<T>(id: number, name: string): Observable<T> {
    return this.fs
      .collection<T>(name, (ref) => ref.where('id', '==', id))
      .get()
      .pipe(map((a) => a.docs[0]?.data() as T));
  }

  getProductById(id: number): Observable<Product> {
    const projects = (pid: number[]) =>
      this.getStoreByName('project').pipe(map((a) => a.filter((b) => pid.includes(b.id))));
    const sizes = (sid: number[]) => this.getStoreByName('size').pipe(map((a) => a.filter((b) => sid.includes(b.id))));

    const product = this.fs
      .collection<Product>('products', (ref) => ref.where('id', '==', id))
      .valueChanges()
      .pipe(
        map((a) => a[0]),
        filter((a) => !!a)
        // concatMap((a) => projects([a.project]).pipe(map((b) => ({ ...a, project: b[0] })))),
        // concatMap((a) =>
        //   sizes(a.size).pipe(
        //     map((size) => ({
        //       ...a,
        //       size,
        //     }))
        //   )
        // )
      );

    return product;
  }

  getPoints(param: ParamMap): Observable<IStoreItem[]> {
    const size = this.getCollection('size');
    const stores = param.keys
      .filter((k) => k !== 'id')
      .map((point) => this.getStoreByName(point).pipe(map((a) => a.find((b) => b.id === +param.get(point)))));

    const mutSize = (a: IStoreItem, s: IStoreItem[]): IStoreItem => ({
      ...a,
      size: a.size.map((b) => ({ ...s.find((e) => e.id === b) })),
    });

    return size.pipe(mergeMap((s) => forkJoin(stores).pipe(map((st) => st.map((a) => (a?.size ? mutSize(a, s) : a))))));
  }
}
