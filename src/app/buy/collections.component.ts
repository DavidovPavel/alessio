import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  template: ` <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="collections/1/180"
        ><img src="assets/images/store/collections/1.png" alt="" />
        <div>Сhaos code</div>
      </a>
      <a routerLink="collections/2/180"
        ><img src="assets/images/store/collections/2.png" alt="" />
        <div>east</div>
      </a>
      <a routerLink="collections/3/180"
        ><img src="assets/images/store/collections/3.png" alt="" />
        <div>Сhaos</div>
      </a>
      <a routerLink="collections/4/180"
        ><img src="assets/images/store/collections/4.png" alt="" />
        <div>indian</div>
      </a>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <span></span>
      <a routerLink="collections/5/180"
        ><img src="assets/images/store/collections/5.png" alt="" />
        <div>europe</div>
      </a>
      <a routerLink="collections/6/180"
        ><img src="assets/images/store/collections/6.png" alt="" />
        <div>middle east</div>
      </a>
      <span></span>
    </div>
    <app-social></app-social>`,
  styleUrls: ['./list/list.component.scss'],
})
export class CollectionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
