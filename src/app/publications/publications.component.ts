import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand, opacity } from '../core/animations';
import { ApiService } from '../core/api.service';
import { IPublication } from '../core/types';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [expand(144), opacity],
})
export class PublicationsComponent implements OnInit {
  items$: Observable<IPublication[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getPublications();
  }
}
