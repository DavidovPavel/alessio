import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `<img src="assets/store/product/{{ path }}.png" alt="" />`,
  styles: [
    ':host.active {border: solid .02vw #e48179;}',
    ':host.big img {width: auto;height: 100vh;cursor: default;}',
    'img {cursor: pointer;width: 9.4vw;display: flex;}',
  ],
})
export class ImgComponent {
  @Input() path: string;
}
