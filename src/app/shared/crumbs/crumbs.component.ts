import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { IStoreItem, ITitleId } from './../../core/types';
import { StoreService } from './../../services/store.service';


@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styles: ['h1 { font-size: 1.1vw; }'],
})
export class CrumbsComponent implements OnInit {
  points$: Observable<IStoreItem[]>;
  sizes: ITitleId[];
  param: ParamMap;

  constructor(private service: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.points$ = this.route.paramMap.pipe(
      tap((param) => (this.param = param)),
      switchMap((param) => this.service.getPoints(param)),
      tap((a) => (this.sizes = a.find((b) => b?.size)?.size as ITitleId[])),
    );
  }

  link(n: number, d: number = null) {
    const a = this.param.keys
      .filter((_, i) => i <= n)
      .map((point, i) => (i === n && d ? d : this.param.get(point)));
    return ['/buy/project', ...a];
  }
}
