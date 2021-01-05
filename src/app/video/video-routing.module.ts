import { MiddleComponent } from './middle/middle.component';
import { SectionComponent } from './section/section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../shared/components/shell/shell.component';
import { VideoComponent } from './video.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: VideoComponent },
      {
        path: ':section',
        component: SectionComponent,
        children: [{ path: ':id', component: MiddleComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
