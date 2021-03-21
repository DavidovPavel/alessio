import { ListItem } from './../list-item';
import { PointInfo } from './../point-info';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() point: PointInfo;
  @Input() group: ListItem[][];

  constructor() {}

  ngOnInit(): void {
    // const { name } = this.route.snapshot.data;

    // this.hideTitle = this.exclude.includes(name);
    // this.storeName = name;

    // this.groups$ = this.service.getStoreByName(name).pipe(
    //   map((store: IStoreItem[]) =>
    //     store
    //       .map((a) => ({
    //         ...a,
    //         link: `${a.id}${a?.goto ? `/${a.goto.join('/')}` : ''}`,
    //       }))
    //       .reduce(groupByFour, [])
    //       .map((a) => (a.length === 2 ? [{}, ...a, {}] : a))
    //   )
    // );
  }
}
