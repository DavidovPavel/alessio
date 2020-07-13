import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lang-switch',
  template: '<a [style.color]="color" href="../en">ENG</a><span>/</span><a [style.color]="color" href="../it">IT</a>',
  styles: [':host {width: 60px; text-align: right;}'],
})
export class LangSwitchComponent {
  @Input() color = '#000000';
}
