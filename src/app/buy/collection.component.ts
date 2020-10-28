import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
    <ng-container *ngFor="let item of group">
      <a routerLink="{{ item.id }}"
        ><img
          src="assets/images/store/collection/{{ item.collection }}/sizes/{{
            size
          }}/{{ item.id }}.png"
          alt="{{ item.title }}"
        />
        <span>{{ item.title }}</span>
      </a>
    </ng-container>
    <app-social></app-social>
  </div> `,
  styleUrls: ['./list/list-item/list-item.component.scss'],
})
export class CollectionComponent implements OnInit {
  groups$: Observable<IProduct[][]>;
  size = 1;

  constructor(private route: ActivatedRoute, private fs: AngularFirestore) {}

  ngOnInit(): void {
    this.groups$ = this.route.paramMap.pipe(
      tap((a) => (this.size = +a.get('size'))),
      switchMap((a) =>
        this.fs
          .collection<IProduct>('products', (ref) =>
            ref
              .where('project', '==', +a.get('project'))
              .where('category', '==', +a.get('category'))
              .where('color', '==', +a.get('color'))
              .where('collection', '==', +a.get('collection')),
          )
          .valueChanges(),
      ),
      map((c) => c.reduce(groupByFour, [] as IProduct[][])),
    );
  }
}
