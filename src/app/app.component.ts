import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'alessio';
  currentYear = new Date().getFullYear();

  constructor(private meta: Meta) {
    this.meta.addTags([{ name: 'description', content: 'Alessio Romano, artist. Originally from Roma, Italy.' }]);
  }
}
