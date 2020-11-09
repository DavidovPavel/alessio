import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IProduct } from 'src/app/core/types';

import { StoreService } from './../../services/store.service';

export interface DialogData {
  path: string;
}
@Component({
  selector: 'app-big-img',
  template: '<app-img [path]="data.path" class="big"></app-img>',
})
export class OpenBigImgComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: 'app-check',
  template: 'check here',
})
export class CheckComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  doc$: Observable<IProduct>;
  currentId: number;
  currentSize: number;
  currentPrev = 1;
  previews = [1, 2, 3];

  get path() {
    return `${this.currentSize}/${this.currentId}`;
  }

  constructor(
    private route: ActivatedRoute,
    private ss: StoreService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.doc$ = this.route.paramMap.pipe(
      tap((a) => (this.currentSize = 5) /*+a.get('size')*/),
      tap((a) => (this.currentId = +a.get('id'))),
      switchMap((a) => this.ss.getProductById(+a.get('id'))),
    );
  }

  showBig() {
    this.dialog.open(OpenBigImgComponent, {
      height: '100%',
      panelClass: 'big-img-dialog',
      backdropClass: 'big-img-overlay',
      data: {
        path: `${this.path}/big/${this.currentPrev}`,
      },
    });
  }

  showCheck() {
    this.dialog.open(CheckComponent, {});
  }
}
