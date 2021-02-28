import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() item: any;
  @Input() hideTitle: boolean;
  @Input() storeName: string;
  @Input() size: number;
}
