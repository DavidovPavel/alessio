import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand } from '../core/animations';
import { ApiService } from '../core/api.service';
import { IPublication } from '../core/types';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [expand('12.5vw')],
})
export class PublicationsComponent implements OnInit {
  items$: Observable<IPublication[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getPublications();
  }
}
