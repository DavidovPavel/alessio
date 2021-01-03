import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  template: '<a>ENG</a><span>/</span><a>IT</a>',
  styles: [
    `
      :host {
        width: 3.75vw;
        text-align: right;
        font-size: 0.88vw;
      }
      a,
      span {
        color: #fff;
      }
      :host.light a,
      :host.light span {
        color: #000;
      }
    `,
  ],
})
export class LangSwitchComponent {
  @Input() isLight = false;
  @HostBinding('class.light') get light() {
    return this.isLight;
  }
}
