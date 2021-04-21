import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListItem } from '@app/buy/list-item';
import { PointInfo } from '@app/buy/point-info';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  template: '<div *ngIf="item$ | async"></div>',
})
export class CollectionComponent implements OnInit {
  pointInfo: PointInfo = {
    name: 'collection',
    showTitle: true,
  };

  item$: Observable<ListItem>;

  constructor(private fire: FireService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((p) =>
        this.fire
          .getDocument<ListItem>(
            `projects/${p.get('id')}/category/${p.get('category')}/color/${p.get('color')}/collection/${p.get(
              'collection'
            )}`
          )
          .pipe(tap((d) => this.router.navigate(['1'], { relativeTo: this.route })))
      )
    );
  }
}
