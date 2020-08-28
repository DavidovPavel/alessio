import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
