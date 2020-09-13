import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand } from '../core/animations';
import { ApiService } from '../core/api.service';
import { ICollaboration } from '../core/types';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
  animations: [expand('12.5vw')],
})
export class CollaborationsComponent implements OnInit {
  items$: Observable<ICollaboration[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getCollaborations();
  }
}
