import { Component, Input, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-crumbs',
  template: `
    <h1>
      <ng-container
        *ngIf="
          params.keys.includes('category') || params.keys.includes('project')
        "
      >
        <span>Type</span> | <a routerLink="/buy/projects">Project</a> |
        <a
          [routerLink]="['/buy/projects/', params.get('project')]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ current.project }}</a
        >
      </ng-container>
      <ng-container *ngIf="params.keys.includes('color')">
        |
        <a
          [routerLink]="[
            '/buy/projects/',
            params.get('project'),
            params.get('category'),
            params.get('color')
          ]"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >{{ current.color }}</a
        >
      </ng-container>
      <ng-container
        *ngIf="
          params.keys.includes('size') || params.keys.includes('collection')
        "
      >
        |
        <a
          [routerLink]="[
            '/buy/projects/',
            params.get('project'),
            params.get('category'),
            params.get('color'),
            params.get('collection')
          ]"
          >{{ current.collection }}</a
        >
        |
        <ng-container *ngFor="let size of collectionSize; let last = last">
          <a
            [routerLink]="[
              '/buy/projects/',
              params.get('project'),
              params.get('category'),
              params.get('color'),
              params.get('collection'),
              size.id
            ]"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >{{ size.title }}</a
          >
          <ng-container *ngIf="!last"> | </ng-container>
        </ng-container>
      </ng-container>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-size: 1.1vw;
      }
      .active {
        color: #cc2229;
      }
    `,
  ],
})
export class CrumbsComponent implements OnInit {
  @Input() params: ParamMap;
  current = { project: '', collection: '', color: '' };
  collectionSize = [];
  // store = this.storage.store;
  constructor() {}

  ngOnInit(): void {
    const points = ['project', 'category', 'color', 'collection'];

    // this.current.project =
    //   this.store.project.find((a) => a.id === +this.params.get('project'))
    //     ?.title || '';
    // this.current.color =
    //   this.store.color.find((a) => a.id === +this.params.get('color'))?.title ||
    //   '';
    // const currentCollection = this.store.сollection.find(
    //   (a) => a.id === +this.params.get('collection'),
    // );
    // this.current.collection = currentCollection?.title || '';
    // this.collectionSize =
    //   currentCollection?.size.map((id) => ({
    //     id,
    //     title: this.store.size.find((b) => b.id === id).title,
    //   })) || [];
  }
}
