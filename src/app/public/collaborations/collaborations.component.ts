import { Component, OnInit } from '@angular/core';
import { expand } from '@app/core/animations';
import { ApiService } from '@app/core/api.service';
import { Collaboration } from '@app/core/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss'],
  animations: [expand('10.5vw')],
})
export class CollaborationsComponent implements OnInit {
  items$: Observable<Collaboration[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getCollaborations();
  }
}
