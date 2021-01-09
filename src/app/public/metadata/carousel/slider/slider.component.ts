import { Observable } from 'rxjs';
import {
  animate,
  AnimationBuilder,
  AnimationMetadata,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { Component, HostBinding, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
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

    this.playAnimation(this.getRightAnimation()).onDone(() => {
      this.removeImg('first');
      this.addLast();
    });
  }

  toLeft(): void {
    this.current--;
    if (this.current === 0) this.current = this.total;

    this.playAnimation(this.getLeftAnimation()).onDone(() => {
      this.removeImg('last');
      this.addFirst();
    });
  }

  removeImg(selector: 'last' | 'first'): void {
    const el = this.el.nativeElement;
    const img = el.querySelector(`img:${selector}-child`);
    this.render.removeChild(el, img, true);
    this.playAnimation([animate(0.1, style({ 'margin-left': '-' + this.width }))]);
  }

  addFirst(): void {
    this.getFirstUrl().subscribe((url) => {
      const el = this.el.nativeElement;
      const img = this.render.createElement('img') as HTMLImageElement;
      const first = this.el.nativeElement.querySelector('img:first-child');
      this.render.setStyle(img, 'width', this.width);
      this.render.insertBefore(el, img, first, true);
      this.render.setAttribute(img, 'src', url);
    });
  }

  addLast(): void {
    this.getLastUrl().subscribe((url) => {
      const el = this.el.nativeElement;
      const img = this.render.createElement('img') as HTMLImageElement;
      this.render.setStyle(img, 'width', this.width);
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

  private playAnimation(animationMetaData: AnimationMetadata[]): AnimationPlayer {
    const animation = this.builder.build(animationMetaData);
    const player = animation.create(this.el.nativeElement);
    player.play();
    return player;
  }

  getRightAnimation(): AnimationMetadata[] {
    return [
      animate(
        '400ms ease-in',
        style({ 'margin-left': '-' + this.styles.width * 2 + this.styles.units })
      ),
    ];
  }

  getLeftAnimation(): AnimationMetadata[] {
    return [animate('400ms ease-in', style({ 'margin-left': 0 }))];
  }

  get width() {
    return this.styles ? `${this.styles.width}${this.styles.units}` : '';
  }
}
