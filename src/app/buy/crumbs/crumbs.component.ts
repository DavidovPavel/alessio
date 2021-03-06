import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';
import { IdTitle } from '@app/core/models/id-title';
import { Product } from '@app/core/models/product';
import { IStoreItem } from '@app/core/models/store-item';
import { StoreService } from '@app/services/store.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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

  @Input() showSize = false;

  @Input() currentSize: number;

  @Input() set current(product: Product) {
    if (product) {
      const { project: projects, category, color, collection } = product;
      this.param = convertToParamMap({ projects, category, color, collection, size: this.currentSize });
      this.points$ = this.service.getPoints(this.param);
    }
  }

  constructor(private service: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.param) {
      this.points$ = this.route.paramMap.pipe(
        tap((param) => (this.param = param)),
        switchMap((p) => this.service.getPoints(p))
      );
    }
  }

  link(n: number, d: number = null, goto: string[] = []) {
    const a = this.param.keys.filter((_, i) => i <= n).map((point, i) => (i === n && d ? d : this.param.get(point)));
    return ['/buy/projects', ...a, ...goto];
  }
}
