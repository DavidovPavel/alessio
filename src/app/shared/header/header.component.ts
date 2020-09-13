import { Component, OnInit, Input } from '@angular/core';
import { IMenu, ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentYear = new Date().getFullYear();
  menu: IMenu[];
  @Input() lopped = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.menu = this.api.topMenu();
  }

}
