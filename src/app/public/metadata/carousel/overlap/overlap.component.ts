import { Component, EventEmitter, Output } from '@angular/core';
import { leftRight } from '../carousel.component';

@Component({
  selector: 'app-overlap',
  template: `
    <div (click)="toLeft()"><img role="left" src="assets/images/left-arrow.png" alt="" /></div>
    <div (click)="toRight()"><img role="right" src="assets/images/right-arrow.png" alt="" /></div>
  `,
  styleUrls: ['./overlap.component.scss'],
})
export class OverlapComponent {
  @Output() direction = new EventEmitter<leftRight>();

  toLeft(): void {
    this.direction.emit(-1);
  }

  toRight(): void {
    this.direction.emit(1);
  }
}
