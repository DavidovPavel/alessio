import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IProduct } from 'src/app/core/types';

import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  doc$: Observable<IProduct>;
  currentSize: number;

  constructor(private route: ActivatedRoute, private ss: StoreService) {}

  ngOnInit(): void {
    this.doc$ = this.route.paramMap.pipe(
      tap((a) => (this.currentSize = 5) /*+a.get('size')*/),
      switchMap((a) => this.ss.getProductById(+a.get('id'))),
    );
  }
}
