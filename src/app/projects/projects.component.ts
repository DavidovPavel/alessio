import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { expand, opacity } from '../core/animations';
import { ApiService } from '../core/api.service';
import { IProject } from '../core/types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [expand(144), opacity],
})
export class ProjectsComponent implements OnInit {
  items$: Observable<IProject[]>;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.items$ = this.api.getProjects();
  }
}
