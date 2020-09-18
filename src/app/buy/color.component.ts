import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  template: `<div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="colors/1">
        <img src="assets/images/store/colors/1.png" alt="" />
        <div>BLACK</div>
      </a>
      <a routerLink="colors/2">
        <img src="assets/images/store/colors/2.png" alt="" />
        <div>ORO</div>
      </a>
      <a routerLink="colors/3">
        <img src="assets/images/store/colors/3.png" alt="" />
        <div>SACRO</div>
      </a>
      <a routerLink="colors/4">
        <img src="assets/images/store/colors/4.png" alt="" />
        <div>GRIGIO</div>
      </a>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="colors/5">
        <img src="assets/images/store/colors/5.png" alt="" />
        <div>ZAFFIRO</div>
      </a>
      <a routerLink="colors/6">
        <img src="assets/images/store/colors/6.png" alt="" />
        <div>AMETISTA</div>
      </a>
      <a routerLink="colors/7">
        <img src="assets/images/store/colors/7.png" alt="" />
        <div>TOPAZIO</div>
      </a>
      <a routerLink="colors/8">
        <img src="assets/images/store/colors/8.png" alt="" />
        <div>SMERALDO</div>
      </a>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="colors/9">
        <img src="assets/images/store/colors/9.png" alt="" />
        <div>COMMEDIA DELL’ARTE</div>
      </a>
      <a routerLink="colors/10">
        <img src="assets/images/store/colors/10.png" alt="" />
        <div>SOLE</div>
      </a>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class ColorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
