import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {
    this.meta.addTags([{ name: 'description', content: 'Alessio Romano, artist. Originally from Roma, Italy.' }]);
  }

  ngOnInit(): void {}
}
