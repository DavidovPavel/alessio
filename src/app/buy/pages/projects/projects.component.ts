import { Component, OnInit } from '@angular/core';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

import { ListItem } from '../../list-item';
import { PointInfo } from '../../point-info';

@Component({
  selector: 'app-projects',
  template: '<app-list [point]="pointInfo" [group]="group$ | async"></app-list>',
})
export class ProjectsComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'project',
    showTitle: false,
  };

  group$: Observable<ListItem[][]>;

  constructor(private fire: FireService) {}

  ngOnInit(): void {
    this.group$ = this.fire.getGroup(this.pointInfo.name);
  }
}
