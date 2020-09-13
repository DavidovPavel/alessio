import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand } from '../core/animations';
import { ApiService } from '../core/api.service';
import { BaseComponent, IExhibition } from '../core/types';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss'],
  animations: [expand()],
})
export class ExhibitionsComponent extends BaseComponent implements OnInit {
  items$: Observable<IExhibition[]>;
  constructor(private api: ApiService) {
    super();
  }

  ngOnInit(): void {
    this.items$ = this.api.getExhibitions();
  }
}
