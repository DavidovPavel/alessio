import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IStoreItem } from './../core/types';
import { StoreService } from './../services/store.service';

@Component({
  selector: 'app-crumbs',
  template: `
    <h1>
      <span>Type</span> | <a routerLink="/buy/catalog">Project</a>

      <ng-container *ngIf="points$ | async as points">
        <ng-container *ngFor="let point of points; let i = index">
          <span>&nbsp;|&nbsp;</span
          ><a
            [routerLink]="getLink(i)"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ point?.title }}</a
          >
        </ng-container>
      </ng-container>

      <ng-container *ngIf="sizes.length">
        |
        <ng-container *ngFor="let size of sizes; let last = last">
          <a
            [routerLink]="[getLink(3), size.id]"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ size?.title }}</a
          >
          <ng-container *ngIf="!last"> | </ng-container>
        </ng-container>
      </ng-container>
    </h1>
  `,
  styles: ['h1 { font-size: 1.1vw; }'],
})
export class CrumbsComponent implements OnInit {
  @Input() params: string[];

  points$: Observable<IStoreItem[]>;
  sizes = [];
  currentSizes = [];

  constructor(private ss: StoreService) {}

  ngOnInit(): void {
    this.params = this.params.filter((v) => v !== 'catalog');
    this.points$ = this.ss.getPoints(this.params);
  }

  getLink(i: number) {
    return this.ss.getLink(this.params.slice(0, i + 1));
  }
}
