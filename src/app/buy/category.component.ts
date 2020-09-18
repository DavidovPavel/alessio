import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: ` <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="category/1">
        <img src="assets/images/store/category/1.png" alt="" />
        <div>art</div>
      </a>
      <a routerLink="category/2">
        <img src="assets/images/store/category/2.png" alt="" />
        <div>installation</div>
      </a>
      <a routerLink="category/3">
        <img src="assets/images/store/category/3.png" alt="" />
        <div>print</div>
      </a>
      <span>
        <span></span>
        <div>collection 4 home</div>
      </span>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <span>
        <span></span>
        <div>collection 4 man</div>
      </span>
      <span>
        <span></span>
        <div>souvenirs</div>
      </span>
      <span>
        <span></span>
        <div>accessory</div>
      </span>
      <span>
        <span></span>
        <div>collection 4 woman</div>
      </span>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
