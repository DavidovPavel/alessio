import { Component, OnInit } from '@angular/core';
import { ListItem } from '@app/buy/list-item';
import { PointInfo } from '@app/buy/point-info';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  template: '<app-list [point]="pointInfo" [group]="group$ | async"></app-list>',
})
export class CategoryComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'category',
    showTitle: true,
  };

  group$: Observable<ListItem[][]>;

  constructor(private fire: FireService) {}

  ngOnInit(): void {
    this.group$ = this.fire.getGroup(this.pointInfo.name, 'pos');
  }
}