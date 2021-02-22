import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  @Input() path: string;
  @Input() currentId: number;
  @Input() isBig = false;

  src: string;

  ngOnInit(): void {
    this.src = this.getSrc(this.path, this.currentId);
  }

  getSrc(path: string, cid: number) {
    return `assets/store/product/${path}${cid}.png`;
  }

  left(): void {
    this.currentId = this.currentId !== 0 ? this.currentId - 1 : 3;
    this.src = this.getSrc(
      this.currentId === 0 ? '' : this.path,
      this.currentId,
    );
  }

  right(): void {
    this.currentId = this.currentId !== 3 ? this.currentId + 1 : 0;
    this.src = this.getSrc(
      this.currentId === 0 ? '' : this.path,
      this.currentId,
    );
  }
}
