import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { headOnScroll } from 'src/app/core/animations';

import { BigPictureComponent } from '../big-picture.component';
import { ICurrentItem } from './../../core/models/ICurrentItem';
import { StoreService } from './../../services/store.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [headOnScroll],
})
export class ProductComponent implements OnInit {
  doc$: Observable<ICurrentItem>;
  currentId: number;
  currentSize: number;
  currentPrev = 1;
  previews = [1, 2, 3];
  isScroll = false;

  get path() {
    return `${this.currentSize}/${this.currentId}`;
  }

  constructor(private route: ActivatedRoute, private service: StoreService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.doc$ = this.route.paramMap.pipe(
      tap((a) => (this.currentSize = +a.get('size'))),
      tap((a) => (this.currentId = +a.get('id'))),
      switchMap((a) => this.service.getCurrentItem(a))
    );
  }

  showBig() {
    this.dialog.open(BigPictureComponent, {
      height: '100%',
      panelClass: 'big-img-dialog',
      backdropClass: 'big-img-overlay',
      data: {
        path: `${this.path}/big/`,
        currentId: this.currentPrev,
      },
    });
  }

  showCheck() {
    // this.dialog.open(CheckComponent, {});
  }
}
