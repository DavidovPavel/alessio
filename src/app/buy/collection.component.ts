import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  template: `<div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="1"
        ><img src="assets/images/store/collections/1/000.png" alt="" />
        <div>Сhaos 000</div>
      </a>
      <a routerLink="2"
        ><img src="assets/images/store/collections/1/33.png" alt="" />
        <div>Сhaos 33</div>
      </a>
      <a routerLink="3"
        ><img src="assets/images/store/collections/1/66.png" alt="" />
        <div>Сhaos 66</div>
      </a>
      <a routerLink="4"
        ><img src="assets/images/store/collections/1/00.png" alt="" />
        <div>Сhaos 00</div>
      </a>
    </div>
    <div fxLayout fxLayoutAlign="space-between" class="items">
      <a routerLink="5"
        ><img src="assets/images/store/collections/1/88.png" alt="" />
        <div>Сhaos 88</div>
      </a>
      <a routerLink="6"
        ><img src="assets/images/store/collections/1/333.png" alt="" />
        <div>Сhaos 333</div>
      </a>
      <a routerLink="7"
        ><img src="assets/images/store/collections/1/555.png" alt="" />
        <div>Сhaos 555</div>
      </a>
      <a routerLink="8"
        ><img src="assets/images/store/collections/1/999.png" alt="" />
        <div>Сhaos 999</div>
      </a>
    </div>
    <app-social></app-social> `,
  styleUrls: ['./list/list.component.scss'],
})
export class CollectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
