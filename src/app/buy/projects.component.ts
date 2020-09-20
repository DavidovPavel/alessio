import { Component } from '@angular/core';

import { StoreProjects } from '../core/store';

@Component({
  selector: 'app-projects',
  template: ` <div fxLayout fxLayoutAlign="space-between start" class="items" *ngFor="let group of groups">
      <ng-container *ngFor="let item of group">
        <a [appHover]="item.inActive" *ngIf="item.id; else dummy" routerLink="{{ item.inActive ? item.id : null }}">
          <span *ngIf="!item.inActive" class="under">UNDER CONSTRACTION</span>
          <img src="assets/images/store/projects/{{ item.id }}.png" alt="{{ item.title }}"
        /></a>
        <ng-template #dummy
          ><span><img *ngIf="item.img" src="assets/images/store/projects/{{ item.img || item.id }}.png" alt="" /></span
        ></ng-template>
      </ng-container>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class ProjectsComponent {
  groups = StoreProjects;
}
