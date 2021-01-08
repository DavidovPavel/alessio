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
  first = 0;
  current = 1;
  last = 2;

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
      this.first = this.total;
    }
  }

  trigger(direction: boolean): void {
    direction ? this.toRight() : this.toLeft();
  }

  toRight(): void {
    this.addLast();
    const player = this.playAnimation(this.getRightAnimation());
    player.onDone(() => this.killFirst());
  }

  toLeft(): void {
    this.addFirst();
    const player = this.playAnimation(this.getLeftAnimation());
    player.onDone(() => this.killLast());
  }

  killFirst(): void {
    const el = this.el.nativeElement;
    const first = el.querySelector('img:first-child');
    this.render.removeChild(el, first, true);
    this.playAnimation([animate(0.1, style({ 'margin-left': '-' + this.width }))]);
  }

  killLast(): void {
    const el = this.el.nativeElement;
    const last = el.querySelector('img:last-child');
    this.render.removeChild(el, last, true);
    this.playAnimation([animate(0.1, style({ 'margin-left': '-' + this.width }))]);
  }

  addFirst(): void {
    const el = this.el.nativeElement;
    const first = this.render.createElement('img') as HTMLImageElement;

    const next = this.first - 1;
    this.first = next === 0 ? this.total : next;

    this.storage
      .ref(`${this.path}/${this.first}.png`)
      .getDownloadURL()
      .subscribe((url) => {
        this.render.setStyle(first, 'width', this.width);
        this.render.setAttribute(first, 'src', url);
        this.render.appendChild(el, first);
      });
  }

  addLast(): void {
    const el = this.el.nativeElement;
    const last = this.render.createElement('img') as HTMLImageElement;

    const next = this.last + 1;
    this.last = next > this.total ? 1 : next;

    this.storage
      .ref(`${this.path}/${this.last}.png`)
      .getDownloadURL()
      .subscribe((url) => {
        this.render.setStyle(last, 'width', this.width);
        this.render.setAttribute(last, 'src', url);
        this.render.appendChild(el, last);
      });
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
