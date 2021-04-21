import { Component, OnInit } from '@angular/core';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

import { ListItem } from '../../list-item';
import { PointInfo } from '../../point-info';

@Component({
  selector: 'app-projects',
  template: `<div style="margin: 0 13% 0 12%">
    <div fxLayout fxLayoutAlign="space-between center" class="top-tools">
      <app-crumbs></app-crumbs>
      <app-lang-switch [isLight]="true"></app-lang-switch>
    </div>
    <app-list [point]="pointInfo" [group]="group$ | async"></app-list>
  </div>`,
})
export class ProjectsComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'projects',
    showTitle: false,
  };

  group$: Observable<ListItem[][]>;

  constructor(private fire: FireService) {}

  ngOnInit(): void {
    this.group$ = this.fire.getGroup(this.pointInfo.name, 'pos');
  }
}
