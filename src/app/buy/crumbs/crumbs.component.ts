import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildActivationEnd,
  convertToParamMap,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { IdTitle } from '@app/core/models/id-title';
import { Product } from '@app/core/models/product';
import { IStoreItem } from '@app/core/models/store-item';
import { StoreService } from '@app/services/store.service';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-crumbs',
  templateUrl: './crumbs.component.html',
  styles: ['h1 { font-size: 1.1vw; }'],
})
export class CrumbsComponent implements OnInit {
  points$: Observable<IStoreItem[]>;
  sizes: IdTitle[] = [
    { id: 1, title: '180X180' },
    { id: 2, title: '150X150' },
    { id: 3, title: '100X100' },
    { id: 4, title: '50X50' },
  ];
  param: ParamMap;

  @Input() set current(product: Product) {
    if (product) {
      const { project, category, color, collection, size } = product;
      this.param = convertToParamMap({ project, category, color, collection, size: size[0] });
      this.points$ = this.getPoints(this.param);
    }
  }

  constructor(private service: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.points$ = this.route.paramMap.pipe(
      tap((param) => (this.param = param)),
      switchMap((p) => this.getPoints(p)),
      // tap((a) => (this.sizes = a.find((b) => b?.size)?.size as IdTitle[]))
    );
  }

  getPoints(param: ParamMap): Observable<IStoreItem[]> {
    return this.service.getPoints(param);
  }

  link(n: number, d: number = null, goto: string[] = []) {
    const a = this.param.keys.filter((_, i) => i <= n).map((point, i) => (i === n && d ? d : this.param.get(point)));
    return ['/buy/project', ...a, ...goto];
  }
}
