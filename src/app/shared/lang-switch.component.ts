import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  template: '<a [style.color]="color">ENG</a><span>/</span><a [style.color]="color">IT</a>',
  styles: [':host {width: 3.75vw; text-align: right; font-size: 0.88vw;}'],
})
export class LangSwitchComponent {
  @Input() color = '#000000';
}
