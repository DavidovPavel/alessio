import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand, opacity } from '../core/animations';
import { ApiService } from '../core/api.service';
import { ICollaboration } from '../core/types';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
  animations: [expand('10.96vw')],
})
export class CollaborationsComponent implements OnInit {
  items$: Observable<ICollaboration[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getCollaborations();
  }
}
