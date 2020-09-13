import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `<div fxLayout fxLayoutAlign="space-between start" class="items">
      <a routerLink="1"><img src="assets/images/store/projects/1.png" alt="" /></a>
      <a routerLink="2"><img src="assets/images/store/projects/2.png" alt="" /></a>
      <a routerLink="3"><img src="assets/images/store/projects/3.png" alt="" /></a>
      <a routerLink="4"><img src="assets/images/store/projects/4.png" alt="" /></a>
    </div>
    <div fxLayout fxLayoutAlign="space-between start" class="items">
      <span><img src="assets/images/store/projects/x.png" alt="" /></span>
      <a routerLink="5"><img src="assets/images/store/projects/5.png" alt="" /></a>
      <a routerLink="6"><img src="assets/images/store/projects/6.png" alt="" /></a>
      <span></span>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class ProjectsComponent {}
