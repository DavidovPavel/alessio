import { Component, Input, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-crumbs',
  template: `
    <h1>
      <span>Type</span> | <a routerLink="/buy">Project</a> |
      <a routerLink="/buy/projects/1">Synchronicity Singularity Apophenia</a> |
      <a routerLink="/buy/projects/1/category/1/colors/1">Black</a> |
      <a routerLink="/buy/projects/1/category/1/colors/1/collections/1/180">Chaos</a> |
      <span style="color:#cc2229">180x180</span> | 150x150 | 100x100 | 50x50
    </h1>
  `,
  styles: [
    `
      h1 {
        font-size: 1.1vw;
      }
    `,
  ],
})
export class CrumbsComponent implements OnInit {
  @Input() params: ParamMap;
  constructor() {}

  ngOnInit(): void {}
}
