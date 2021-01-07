import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { headOnScroll } from './../../../core/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [headOnScroll],
})
export class ShellComponent implements OnInit {
  title = '';
  isScroll = false;
  mainClass = { light: false };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { mainClass } = this.route.firstChild?.snapshot.data;
    if (mainClass) this.mainClass = mainClass;
  }
}
