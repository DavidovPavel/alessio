import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: ` <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="category/1">
        <img src="assets/images/store/category/1.png" alt="" />
        <div i18n="main|">art</div>
      </a>
      <a routerLink="category/2">
        <img src="assets/images/store/category/2.png" alt="" />
        <div i18n="main|">installation</div>
      </a>
      <a routerLink="category/3">
        <img src="assets/images/store/category/3.png" alt="" />
        <div i18n="main|">print</div>
      </a>
      <span>
        <span></span>
        <div i18n="main|">collection 4 home</div>
      </span>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <span>
        <span></span>
        <div i18n="main|">collection 4 man</div>
      </span>
      <span>
        <span></span>
        <div i18n="main|">souvenirs</div>
      </span>
      <span>
        <span></span>
        <div i18n="main|">accessory</div>
      </span>
      <span>
        <span></span>
        <div i18n="main|">collection 4 woman</div>
      </span>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
