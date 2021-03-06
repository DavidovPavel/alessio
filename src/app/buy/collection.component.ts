import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { headOnScroll } from '../core/animations';
import { Product } from '../core/models/product';
import { groupByFour } from './../core/func';

@Component({
  selector: 'app-collection',
  template: ` <app-header [@headOnScroll]="isScroll"></app-header>
    <main appScroll (read)="isScroll = $event.scrollTop > 1">
      <div fxLayout fxLayoutAlign="space-between center" class="top-tools">
        <app-crumbs></app-crumbs>
        <app-lang-switch [isLight]="true"></app-lang-switch>
      </div>
      <div fxLayout fxLayoutAlign="space-between" class="items" *ngFor="let group of groups$ | async">
        <app-list-item *ngFor="let item of group" [item]="item"></app-list-item>
      </div>
    </main>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      .items {
        margin-bottom: 1.4vw;
        line-height: 1;
      }
    `,
  ],
  animations: [headOnScroll],
})
export class CollectionComponent implements OnInit {
  groups$: Observable<Product[][]>;
  isScroll = false;

  size: number;

  constructor(private route: ActivatedRoute, private fs: AngularFirestore) {}

  ngOnInit(): void {
    const queryFn = (a: ParamMap) => (ref: CollectionReference) => {
      return (
        ref
          .where('project', '==', +a.get('project'))
          .where('category', '==', +a.get('category'))
          // .where('color', '==', +a.get('color'))
          // .where('collection', '==', +a.get('collection'));
          .orderBy('id')
      );
    };

    this.groups$ = this.route.paramMap.pipe(
      tap((a) => (this.size = +a.get('size'))),
      switchMap((a) => this.fs.collection<Product>('products', queryFn(a)).valueChanges()),
      map((c) => c.map((a) => ({ ...a, link: a.id, isActive: true })).reduce(groupByFour, [] as Product[][]))
    );
  }
}
