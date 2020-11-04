import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { IProduct } from '../core/types';
import { groupByFour } from './../core/types';

@Component({
  selector: 'app-collection',
  template: `<div
    fxLayout
    fxLayoutAlign="space-between"
    class="items"
    *ngFor="let group of groups$ | async"
  >
    <app-list-item *ngFor="let item of group" [item]="item" [storeName]="path">
    </app-list-item>
    <app-social></app-social>
  </div> `,
  styles: [
    `
      .items {
        margin-bottom: 1.4vw;
        line-height: 1;
      }
    `,
  ],
})
export class CollectionComponent implements OnInit {
  groups$: Observable<IProduct[][]>;
  path = 'product/1';

  constructor(private route: ActivatedRoute, private fs: AngularFirestore) {}

  ngOnInit(): void {
    const queryFn = (a: number[]) => (ref: CollectionReference) => {
      return (
        ref
          .where('project', '==', a[0])
          .where('category', '==', a[1])
          // .where('color', '==', a[2])
          // .where('collection', '==', a[3]);
          .orderBy('id')
      );
    };

    this.groups$ = this.route.url.pipe(
      map((a) => a.filter((b) => b.path !== 'catalog').map((b) => +b.path)),
      tap((a) => (this.path = `product/${a[a.length - 1]}`)),
      switchMap((a) =>
        this.fs.collection<IProduct>('products', queryFn(a)).valueChanges(),
      ),
      map((c) =>
        c
          .map((a) => ({ ...a, link: a.id, isActive: true }))
          .reduce(groupByFour, [] as IProduct[][]),
      ),
    );
  }
}
