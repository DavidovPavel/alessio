import { Component, OnInit } from '@angular/core';
import { expand } from '@app/core/animations';
import { Project } from '@app/core/models/project';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [expand('12.5vw')],
})
export class ProjectsComponent implements OnInit {
  items$: Observable<Project[]>;
  constructor(private fire: FireService) {}

  ngOnInit(): void {
    this.items$ = this.fire.getCollection('project', (ref) => ref.orderBy('id'));
  }
}
