import { Component, Input, OnInit } from '@angular/core';

import { expand, show2left } from '../core/animations';
import { ApiService, IMenu } from '../core/api.service';

@Component({
  selector: 'app-left',
  template: `
    <button (click)="isOpen = !isOpen" [ngStyle]="{ bottom: isWhite ? 0 : '1.6vw' }">
      <img src="assets/sw{{ isWhite ? '_' : '' }}.png" alt="Show sub menu" />
    </button>
    <div [@show2left]="isOpen" [ngClass]="{ black: isWhite }">
      <ul>
        <li>
          <app-lang-switch [color]="isWhite ? 'black' : 'white'"></app-lang-switch>
        </li>
        <ng-container *ngFor="let item of menu">
          <li *ngIf="!item.children?.length; else child">
            <a routerLink="/{{ item.name }}">{{ item.name }}</a>
          </li>
          <ng-template #child>
            <li [style.cursor]="'pointer'" (click)="isExpand = !isExpand">
              <span>Buy</span
              ><span class="arrow {{ isWhite ? 'black' : '' }}" [ngClass]="{ open: isExpand }"><span></span></span>
            </li>
            <ul [@expand]="isExpand">
              <li *ngFor="let a of item.children">
                <a routerLink="/buy/projects/1/category/{{ a.id }}">{{ a.name }}</a>
              </li>
            </ul>
          </ng-template>
        </ng-container>
      </ul>
    </div>
  `,
  styles: [
    `
      a {
        color: #ffffff;
      }
      button {
        cursor: pointer;
        position: absolute;
        padding: 0;
        border: 0;
        background: none;
        left: 6.6vw;
        bottom: 1.6vw;
      }
      button > img {
        height: 0.7vw;
      }
      div {
        position: absolute;
        z-index: 1000;
        top: 19vw;
        height: 100vh;
        background-color: #000000;
        opacity: 0.77;
        padding-top: 1.6vw;
        overflow: hidden;
        width: 21.3vw;
      }
      ul {
        padding: 0;
        margin: 0 0 0 6.6vw;
      }
      li {
        white-space: nowrap;
        list-style: none;
        letter-spacing: -0.008vw;
        margin-bottom: 0.8vw;
      }
      ul > ul {
        margin: 0;
        padding-left: 1.6vw;
        overflow: hidden;
      }
      .black {
        background-color: white;
        color: black;
      }
      .black a {
        color: black;
      }
    `,
  ],
  animations: [show2left, expand()],
})
export class LeftComponent implements OnInit {
  @Input() isOpen = false;
  @Input() isExpand = false;
  @Input() isWhite = false;
  menu: IMenu[];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.menu = this.api.topMenu().sort((a, b) => a.id - b.id);
  }
}
