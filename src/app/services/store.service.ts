import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ParamMap } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, filter, map, mergeMap, tap } from 'rxjs/operators';

import { IBaseProduct, IProduct, IStoreItem } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store = new Map<string, IStoreItem[]>();

  constructor(private fs: AngularFirestore) {}

  getStoreByName(name: string): Observable<IStoreItem[]> {
    return this.store.has(name)
      ? of(this.store.get(name))
      : this.getCollection(name);
  }

  getProductById(id: number): Observable<IProduct> {
    const projects = (pid: number[]) =>
      this.getStoreByName('project').pipe(
        map((a) => a.filter((b) => pid.includes(b.id))),
      );
    const sizes = (sid: number[]) =>
      this.getStoreByName('size').pipe(
        map((a) => a.filter((b) => sid.includes(b.id))),
      );

    const product = this.fs
      .collection<IBaseProduct>('products', (ref) => ref.where('id', '==', id))
      .valueChanges()
      .pipe(
        map((a) => a[0]),
        filter((a) => !!a),
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

  getCollection(name: string) {
    return this.fs
      .collection<IStoreItem>(name, (ref) => ref.orderBy('id'))
      .get()
      .pipe(
        map((a) => a.docs.map((b) => b.data() as IStoreItem)),
        tap((a) => this.store.set(name, a)),
      );
  }

  getPoints(param: ParamMap): Observable<IStoreItem[]> {
    const size = this.getCollection('size');
    const stores = param.keys
      .filter((k) => k !== 'id')
      .map((point) =>
        this.getStoreByName(point).pipe(
          map((a) => a.find((b) => b.id === +param.get(point))),
        ),
      );
    const mutSize = (a: IStoreItem, s: IStoreItem[]): IStoreItem => ({
      ...a,
      size: a.size.map((b) => ({ ...s.find((e) => e.id === b) })),
    });

    return size.pipe(
      mergeMap((s) =>
        forkJoin(stores).pipe(
          map((st) => st.map((a) => (a?.size ? mutSize(a, s) : a))),
        ),
      ),
    );
  }
}
