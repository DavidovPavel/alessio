import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { headOnScroll } from '@app/core/animations';
import { Product } from '@app/core/models/product';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { BigPictureComponent } from '../big-picture.component';
import { ICurrentItem } from './../../core/models/ICurrentItem';
import { Size } from './../../core/models/size';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [headOnScroll],
})
export class ProductComponent implements OnInit {
  doc$: Observable<{ next: number; prev: number; current: Product }>;
  currentId: number;
  currentSize: number;
  currentPrev = 1;
  previews = [1, 2, 3];
  isScroll = false;

  sizeEnum = Size;
  sizes: number[] = [];

  title: string;

  get path() {
    return `product/${this.title}/${this.currentSize}/${this.title.replace(new RegExp(/\s/gi), '-')}`;
  }

  constructor(private route: ActivatedRoute, private service: StoreService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.doc$ = this.route.paramMap.pipe(
      tap((a) => (this.currentSize = +a.get('size'))),
      tap((a) => (this.currentId = +a.get('id'))),
      switchMap((a) =>
        this.service.getCurrentItem(a).pipe(
          tap((b) => {
            this.title = b.current.title;
            this.sizes = b.current.size;
          })
        )
      )
    );
  }

  showBig() {
    const path = `product/${this.title}/${this.currentSize}/big/${this.title.replace(new RegExp(/\s/gi), '-')}`;
    this.dialog.open(BigPictureComponent, {
      height: '100%',
      panelClass: 'big-img-dialog',
      backdropClass: 'big-img-overlay',
      data: {
        path,
        index: this.currentPrev,
      },
    });
  }

  showCheck() {
    // this.dialog.open(CheckComponent, {});
  }
}
