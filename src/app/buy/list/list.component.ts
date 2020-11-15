import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { headOnScroll } from 'src/app/core/animations';
import { groupByFour, IStoreItem } from 'src/app/core/types';

import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [headOnScroll],
})
export class ListComponent implements OnInit {
  isScroll = false;
  groups$: Observable<any>;
  hideTitle = false;
  exclude = ['project'];
  storeName: string;

  constructor(private service: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { name } = this.route.snapshot.data;

    this.hideTitle = this.exclude.includes(name);
    this.storeName = name;

    this.groups$ = this.service.getStoreByName(name).pipe(
      map((store: IStoreItem[]) =>
        store
          .map((a) => ({
            ...a,
            link: `${a.id}${a?.goto ? `/${a.goto.join('/')}` : ''}`,
          }))
          .reduce(groupByFour, [])
          .map((a) => (a.length === 2 ? [{}, ...a, {}] : a)),
      ),
    );
  }
}
