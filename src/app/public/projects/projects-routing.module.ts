import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../../shared/components/shell/shell.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [{ path: '', component: ProjectsComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
