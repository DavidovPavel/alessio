import { Component, Input } from '@angular/core';

import { ListItem } from './../list-item';
import { PointInfo } from './../point-info';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() point: PointInfo;
  @Input() group: ListItem[][];
}
