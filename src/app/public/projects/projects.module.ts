import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, AngularFireStorageModule],
})
export class ProjectsModule {}
