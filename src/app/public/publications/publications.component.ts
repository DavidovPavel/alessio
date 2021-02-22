import { Component, OnInit } from '@angular/core';
import { Publication } from '@app/core/models/publication';
import { Observable } from 'rxjs';

import { expand } from '../../core/animations';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [expand('12.5vw')],
})
export class PublicationsComponent implements OnInit {
  items$: Observable<Publication[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getPublications();
  }
}
