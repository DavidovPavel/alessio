import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent {
  @Input() path: string;
  @Input() index: number;
  @Input() isBig = false;

  left(): void {
    this.index = this.index !== 0 ? this.index - 1 : 3;
  }

  right(): void {
    this.index = this.index !== 3 ? this.index + 1 : 0;
  }
}
