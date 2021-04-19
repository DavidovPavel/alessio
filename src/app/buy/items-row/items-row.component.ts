import { Component, Input } from '@angular/core';
import { ProductShortModel } from '../pages/showcase/showcase.component';

@Component({
  selector: 'app-items-row',
  templateUrl: './items-row.component.html',
  styleUrls: ['./items-row.component.scss'],
})
export class ItemsRowComponent {
  @Input() items: ProductShortModel[];
}
