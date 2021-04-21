import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '@app/buy/list-item';
import { PointInfo } from '@app/buy/point-info';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  template: `<div style="margin: 0 13% 0 12%">
    <div fxLayout fxLayoutAlign="space-between center" class="top-tools">
      <app-crumbs></app-crumbs>
      <app-lang-switch [isLight]="true"></app-lang-switch>
    </div>
    <app-list [point]="pointInfo" [group]="group$ | async"></app-list>
  </div>`,
})
export class CategoryComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'color',
    showTitle: true,
  };

  group$: Observable<ListItem[][]>;

  constructor(private fire: FireService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.group$ = this.route.paramMap.pipe(
      switchMap((p) => this.fire.getGroup<ListItem>(`projects/${p.get('id')}/category/${p.get('category')}/color`, 'pos'))
    );
  }
}
