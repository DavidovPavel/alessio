import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatAll, first, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Product } from '../core/models/product';
import { IStoreItem } from '../core/models/store-item';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  count: number;
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
    return this.count
      ? of(this.count)
      : this.fs
          .collection('products')
          .snapshotChanges()
          .pipe(
            map((a) => a.length),
            tap((a) => (this.count = a))
          );
  }

  getCurrentItem(param: ParamMap): Observable<{ next: number; prev: number; current: Product }> {
    const id = +param.get('id');
    return this.getCountProducts().pipe(switchMap((a) => this.getProductById(a, id)));
  }

  getProductById(count: number, id: number): Observable<{ next: number; prev: number; current: Product }> {
    const projects = (pid: number) => this.getStoreByName('project').pipe(map((a) => a.filter((b) => pid === b.id)));

    const next = id + 1 > count ? 1 : id + 1;
    const prev = id - 1 < 1 ? count : id - 1;

    const product = this.fs
      .collection<Product>('products', (ref) => ref.where('id', '==', id))
      .get()
      .pipe(
        map((a) => a.docs.map((b) => b.data() as Product)),
        concatAll(),
        first(),
        mergeMap((a) => projects(a.project).pipe(map((b) => ({ ...a, projectName: b[0].title })))),
        map((a) => ({ prev, next, current: a }))
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
