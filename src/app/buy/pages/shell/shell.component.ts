import { Component } from '@angular/core';
import { headOnScroll } from '@app/core/animations';

@Component({
  selector: 'app-buy-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [headOnScroll],
})
export class ShellComponent {
  isScroll = false;
}
