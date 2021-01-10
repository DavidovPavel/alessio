import { animate, AnimationBuilder, style } from '@angular/animations';
import { Injectable, Renderer2 } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Styles } from 'src/app/services/metadata.service';

export interface CarouselData {
  el: HTMLElement;
  styles: Styles;
  total: number;
  path: string;
}

@Injectable()
export class SliderService {
  private data: CarouselData;
  private current = 1;

  constructor(
    private builder: AnimationBuilder,
    private render: Renderer2,
    private storage: AngularFireStorage
  ) {}

  init(data: CarouselData): void {
    this.data = data;
    this.addFirst();
    this.addLast();
  }

  toLeft(): void {
    this.current--;
    if (this.current === 0) this.current = this.data.total;
    this.playAnimation(1);
    this.removeImg('last');
    this.addFirst();
  }

  toRight(): void {
    this.current++;
    if (this.current > this.data.total) this.current = 1;
    this.playAnimation(-1);
    this.removeImg('first');
    this.addLast();
  }

  playAnimation(direction: 1 | -1): void {
    const imgs = this.data.el.querySelectorAll('img') as NodeList;

    imgs.forEach((n, i) => {
      const animation = this.builder.build([
        animate(
          '400ms ease-in',
          style({
            left: this.data.styles.width * (i + direction) + this.data.styles.units,
          })
        ),
      ]);
      const player = animation.create(n);
      player.play();
    });
  }

  removeImg(selector: 'last' | 'first'): void {
    const el = this.data.el;
    const img = el.querySelector(`img:${selector}-child`);
    this.render.removeChild(el, img, true);
  }

  addFirst(): void {
    this.getFirstUrl().subscribe((url) => {
      const el = this.data.el;
      const first = el.querySelector('img:first-child');
      const img = this.createImg(url);
      this.render.insertBefore(el, img, first, true);
    });
  }

  addLast(): void {
    this.getLastUrl().subscribe((url) => {
      const {
        el,
        styles: { width },
      } = this.data;
      const img = this.createImg(url, width * 2);
      this.render.appendChild(el, img);
    });
  }

  getFirstUrl(): Observable<string> {
    const next = this.current - 1;
    const { total, path } = this.data;
    const id = next === 0 ? total : next;
    return this.storage.ref(`${path}/${id}.png`).getDownloadURL();
  }

  getLastUrl(): Observable<string> {
    const next = this.current + 1;
    const { total, path } = this.data;
    const id = next > total ? 1 : next;
    return this.storage.ref(`${path}/${id}.png`).getDownloadURL();
  }

  createImg(url: string, leftPosition = 0): HTMLImageElement {
    const img = this.render.createElement('img') as HTMLImageElement;
    const { width, units } = this.data.styles;
    this.render.setAttribute(img, 'src', url);
    this.render.setStyle(img, 'width', width + units);
    this.render.setStyle(img, 'left', leftPosition + units);
    return img;
  }
}
