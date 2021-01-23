import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { opacity, StyleSet } from './slider.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [opacity],
})
export class CarouselComponent implements OnInit {
  hoverFlag = false;
  total$: Observable<number>;

  @Input() path: string;

  /**
   * @field width: number;
   * @field height: number;
   * @field units: px | em | rem | vw | hw | %;
   */
  @Input() styles: StyleSet;

  @HostBinding('style') get css(): SafeStyle {
    if (!this.styles) return null;
    const { width, height, units } = this.styles;
    const css = `width: ${width}${units}; height: ${height}${units}`;
    return this.sanitizer.bypassSecurityTrustStyle(css);
  }

  @HostListener('mouseover') showArrows() {
    this.hoverFlag = true;
  }

  @HostListener('mouseleave') hideArrows() {
    this.hoverFlag = false;
  }

  constructor(private storage: AngularFireStorage, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const ref = this.storage.ref(this.path);
    this.total$ = ref.listAll().pipe(pluck('items'), pluck('length'));
  }
}
