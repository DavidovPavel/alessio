import { animate, AnimationBuilder, style } from '@angular/animations';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Styles } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  current = 1;

  @Input() path: string;
  @Input() total: number;
  @Input() styles: Styles;

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
    private builder: AnimationBuilder,
    private el: ElementRef,
    private render: Renderer2,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    if (this.total) {
      this.addFirst();
      this.addLast();
    }
  }

  trigger(direction: boolean): void {
    direction ? this.toRight() : this.toLeft();
  }

  toRight(): void {
    this.current++;
    if (this.current > this.total) this.current = 1;

    this.playAnimation(-1);
    this.removeImg('first');
    this.addLast();
  }

  toLeft(): void {
    this.current--;
    if (this.current === 0) this.current = this.total;

    this.playAnimation(1);
    this.removeImg('last');
    this.addFirst();
  }

  removeImg(selector: 'last' | 'first'): void {
    const el = this.el.nativeElement;
    const img = el.querySelector(`img:${selector}-child`);
    this.render.removeChild(el, img, true);
  }

  addFirst(): void {
    this.getFirstUrl().subscribe((url) => {
      const el = this.el.nativeElement;
      const img = this.render.createElement('img') as HTMLImageElement;
      const first = this.el.nativeElement.querySelector('img:first-child');
      this.render.setStyle(img, 'width', this.width);
      this.render.setStyle(img, 'left', 0);
      this.render.insertBefore(el, img, first, true);
      this.render.setAttribute(img, 'src', url);
    });
  }

  addLast(): void {
    this.getLastUrl().subscribe((url) => {
      const el = this.el.nativeElement;
      const img = this.render.createElement('img') as HTMLImageElement;
      this.render.setStyle(img, 'width', this.width);
      this.render.setStyle(img, 'left', this.styles.width * 2 + this.styles.units);
      this.render.appendChild(el, img);
      this.render.setAttribute(img, 'src', url);
    });
  }

  getFirstUrl(): Observable<string> {
    const next = this.current - 1;
    const id = next === 0 ? this.total : next;
    return this.storage.ref(`${this.path}/${id}.png`).getDownloadURL();
  }

  getLastUrl(): Observable<string> {
    const next = this.current + 1;
    const id = next > this.total ? 1 : next;
    return this.storage.ref(`${this.path}/${id}.png`).getDownloadURL();
  }

  private playAnimation(direction: 1 | -1): void {
    const imgs = this.el.nativeElement.querySelectorAll('img') as NodeList;

    imgs.forEach((n, i) => {
      const animation = this.builder.build([
        animate(
          '400ms ease-in',
          style({
            left: this.styles.width * (i + direction) + this.styles.units,
          })
        ),
      ]);
      const player = animation.create(n);
      player.play();
    });
  }

  get width() {
    return this.styles ? `${this.styles.width}${this.styles.units}` : '';
  }
}
