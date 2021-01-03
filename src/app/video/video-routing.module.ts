import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../shared/components/shell/shell.component';
import { VideoComponent } from './video.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [{ path: '', component: VideoComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {}
