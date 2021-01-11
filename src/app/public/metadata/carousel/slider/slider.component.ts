import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { CarouselData, SliderService, StyleSet } from './../slider.service';

@Component({
  selector: 'app-slider',
  template: '<img [src]="1 | path:path | getDownloadURL" [ngStyle]="{width: width, left: width}" alt="" />',
  styleUrls: ['./slider.component.scss'],
  providers: [SliderService],
})
export class SliderComponent implements OnInit {
  @Input() path: string;
  @Input() total: number;
  @Input() styles: StyleSet;

  @HostBinding('style') get css(): SafeStyle {
    if (!this.styles) return null;
    const { width, height, units } = this.styles;
    const css = `
      margin-left: -${width}${units};
      width: ${width * 3}${units};
      height: ${height}${units}
    `;
    return this.sanitizer.bypassSecurityTrustStyle(css);
  }

  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private service: SliderService
  ) {}

  ngOnInit(): void {
    const data: CarouselData = {
      el: this.el.nativeElement,
      styles: this.styles,
      total: this.total,
      path: this.path,
    };
    this.service.init(data);
  }

  trigger(direction: boolean): void {
    direction ? this.toRight() : this.toLeft();
  }

  toLeft(): void {
    this.service.toLeft();
  }

  toRight(): void {
    this.service.toRight();
  }

  get width() {
    return this.styles ? `${this.styles.width}${this.styles.units}` : '';
  }
}
