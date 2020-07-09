import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, FlexLayoutModule],
})
export class ProjectsModule {}
