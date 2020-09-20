import { Component } from '@angular/core';

import { StoreColor } from '../core/store';

@Component({
  selector: 'app-color',
  template: `<div fxLayout fxLayoutAlign="space-between" class="items" *ngFor="let group of groups">
      <ng-container *ngFor="let item of group">
        <a *ngIf="item.inActive; else dummy" routerLink="colors/{{ item.id }}">
          <img src="assets/images/store/colors/{{ item.id }}.png" alt="{{ item.title }}" />
          <div>{{ item.title }}</div>
        </a>
        <ng-template #dummy>
          <span [appHover]="item.inActive">
            <span><span *ngIf="!item.inActive" class="under">UNDER CONSTRACTION</span></span>
            <div>{{ item.title }}</div>
          </span>
        </ng-template>
      </ng-container>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class ColorComponent {
  groups = StoreColor;
}
