import { Component } from '@angular/core';

import { StoreCollections } from '../core/store';

@Component({
  selector: 'app-collections',
  template: `<div fxLayout fxLayoutAlign="space-between" class="items" *ngFor="let group of groups">
    <ng-container *ngFor="let item of group">
      <a *ngIf="item.inActive; else dummy" routerLink="collections/{{ item.id }}/0"
        ><img src="assets/images/store/collections/{{ item.id }}.png" alt="{{ item.title }}" />
        <div>{{ item.title }}</div>
      </a>
      <ng-template #dummy>
        <span [appHover]="item.inActive">
          <span><span *ngIf="!item.inActive" class="under">UNDER CONSTRACTION</span></span>
          <div>{{ item.title }}</div>
        </span>
      </ng-template>
    </ng-container>
    <app-social></app-social>
  </div>`,
  styleUrls: ['./list/list.component.scss'],
})
export class CollectionsComponent {
  groups = StoreCollections;
}
