import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';

import { opacity } from './../../../core/animations';

export type leftRight = -1 | 1;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [opacity],
})
export class CarouselComponent implements OnInit {
  hoverFlag = false;
  current = 1;
  next: number;
  total$: Observable<number>;

  @Input() folder: number;

  @HostListener('mouseover') showArrows() {
    this.hoverFlag = true;
  }

  @HostListener('mouseleave') hideArrows() {
    this.hoverFlag = false;
  }

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    const ref = this.storage.ref(`metadata/${this.folder}`);
    this.total$ = ref.listAll().pipe(pluck('items'), pluck('length'));
  }

  getNextPath(direction: leftRight, total: number): Observable<any> {
    this.next = this.current + direction;
    if (this.next === 0) {
      this.next = total;
    } else if (this.next > total) {
      this.next = 1;
    }
    const ref = this.storage.ref(`metadata/${this.folder}/${this.next}.png`);
    return ref.getDownloadURL();
  }

  move(direction: leftRight): void {
    this.total$
      .pipe(
        switchMap((total) => this.getNextPath(direction, total)),
        map((path: string) => {
          if (direction > 0) {
            // append img tag
          }
          if (direction < 0) {
            // prepend img tag
          }
          // start animation

          // end animation -> remove previous image
        })
      )
      .subscribe((_) => (this.current = this.next));
  }
}
