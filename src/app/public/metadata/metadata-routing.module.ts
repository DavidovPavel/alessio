import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../../shared/components/shell/shell.component';
import { SharedModule } from './../../shared/shared.module';
import { MetadataComponent } from './metadata.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [{ path: '', component: MetadataComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule],
})
export class MetadataRoutingModule {}
