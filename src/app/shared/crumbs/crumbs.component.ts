import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IProduct } from 'src/app/core/models/product';
import { IStoreItem } from 'src/app/core/models/store-item';
import { ITitleId } from 'src/app/core/types';

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

  @Input() set current(product: IProduct) {
    if (product) {
      const { project, category, color, collection, size } = product;
      this.param = convertToParamMap({ project: project.id, category, color, collection, size: size[0].id });
      this.sizes = size;
      this.points$ = this.getPoints(this.param);
    }
  }

  constructor(private service: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.points$ = this.route.paramMap.pipe(
      tap((param) => (this.param = param)),
      switchMap((p) => this.getPoints(p)),
      tap((a) => (this.sizes = a.find((b) => b?.size)?.size as ITitleId[]))
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
