import { Component } from '@angular/core';
import { headOnScroll } from '@app/core/animations';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
  animations: [headOnScroll],
})
export class BuyComponent {
  isScroll = false;
}
