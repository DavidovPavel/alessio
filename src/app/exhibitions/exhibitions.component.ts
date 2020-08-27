import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand } from '../core/animations';
import { ApiService } from '../core/api.service';
import { IExhibition } from '../core/types';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['../css/black.scss', './exhibitions.component.scss'],
  animations: [expand()],
})
export class ExhibitionsComponent implements OnInit {
  items$: Observable<IExhibition[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getExhibitions();
  }
}
