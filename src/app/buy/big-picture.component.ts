import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../core/models/dialog-data';

@Component({
  selector: 'app-big-img',
  template: '<app-picture [path]="data.path" [index]="data.index" [isBig]="true"></app-picture>',
})
export class BigPictureComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
