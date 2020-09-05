import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand } from '../core/animations';
import { ApiService } from '../core/api.service';
import { IProject } from '../core/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../css/black.scss', './projects.component.scss'],
  animations: [expand('12.5vw')],
})
export class ProjectsComponent implements OnInit {
  items$: Observable<IProject[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getProjects();
  }
}
