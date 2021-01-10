import { animate, AnimationBuilder, style } from '@angular/animations';
import { Injectable, Renderer2 } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

enum direction {
  left = 1,
  right = -1,
}

export type unitsType = 'px' | 'em' | 'rem' | '%' | 'vw' | 'vh';
export interface StyleSet {
  width: number;
  height: number;
  units: unitsType;
}
export interface CarouselData {
  el: HTMLElement;
  styles: StyleSet;
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
    this.removeImg('last');
    this.addFirst();
    this.playAnimation(direction.left);
  }

  toRight(): void {
    this.removeImg('first');
    this.addLast();
    this.playAnimation(direction.right);
  }

  playAnimation(d: direction): void {
    const imgs = this.data.el.querySelectorAll('img') as NodeList;
    const { width, units } = this.data.styles;
    imgs.forEach((img, i) => {
      const left = width * (i + d) + units;
      this.builder
        .build([animate('400ms ease-in', style({ left }))])
        .create(img)
        .play();
    });
  }

  removeImg(selector: 'last' | 'first'): void {
    const el = this.data.el;
    const img = el.querySelector(`img:${selector}-child`);
    this.render.removeChild(el, img, true);
  }

  addFirst(): void {
    this.getFirstUrl().subscribe((url) => this.insertFirst(url));
  }

  addLast(): void {
    this.getLastUrl().subscribe((url) => this.appendLast(url));
  }

  getFirstUrl(): Observable<string> {
    const { total, path } = this.data;
    this.current--;
    if (this.current === 0) this.current = this.data.total;
    const next = this.current - 1;
    const id = next === 0 ? total : next;
    return this.storage.ref(`${path}/${id}.png`).getDownloadURL();
  }

  insertFirst(url: string): void {
    const el = this.data.el;
    const first = el.querySelector('img:first-child');
    const img = this.createImg(url);
    this.render.insertBefore(el, img, first, true);
  }

  getLastUrl(): Observable<string> {
    const { total, path } = this.data;
    this.current++;
    if (this.current > this.data.total) this.current = 1;
    const next = this.current + 1;
    const id = next > total ? 1 : next;
    return this.storage.ref(`${path}/${id}.png`).getDownloadURL();
  }

  appendLast(url: string): void {
    const {
      el,
      styles: { width },
    } = this.data;
    const img = this.createImg(url, width * 2);
    this.render.appendChild(el, img);
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
