import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { headOnScroll } from 'src/app/core/animations';

import { ICurrentItem } from './../../core/models/current-item';
import { StoreService } from './../../services/store.service';

export interface DialogData {
  path: string;
  currentId: number;
}
@Component({
  selector: 'app-big-img',
  template: '<app-img [path]="data.path" [currentId]="data.currentId" [isBig]="true"></app-img>',
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
  animations: [headOnScroll],
})
export class ItemComponent implements OnInit {
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
    this.dialog.open(OpenBigImgComponent, {
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
    this.dialog.open(CheckComponent, {});
  }
}
