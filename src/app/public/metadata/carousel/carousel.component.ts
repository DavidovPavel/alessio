import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { map, pluck, switchMap, tap } from 'rxjs/operators';

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
  total$: Observable<number>;

  @Input() folder: number;

  @HostListener('mouseover') showArrows() {
    this.hoverFlag = true;
  }

  @HostListener('mouseleave') hideArrows() {
    this.hoverFlag = false;
  }

  constructor(private storeage: AngularFireStorage) {}

  ngOnInit(): void {
    const ref = this.storeage.ref(`metadata/${this.folder}`);
    this.total$ = ref.listAll().pipe(pluck('items'), pluck('length'));
  }

  getNextPath(direction: leftRight, total: number): void {
    const next = this.current + direction;
    if (next === 0) {
      this.current = total;
    } else if (next > total) {
      this.current = 1;
    } else this.current = next;
    // return `metadata/${this.folder}/${this.current}.png`;
  }

  move(direction: leftRight): void {
    this.total$.pipe(tap((total) => this.getNextPath(direction, total))).subscribe();

    // add next imgage

    // move block with animation

    // remove previous image
  }
}
