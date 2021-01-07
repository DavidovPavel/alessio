import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../../shared/components/shell/shell.component';
import { LegaltermsComponent } from './legalterms.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: [{ path: '', component: LegaltermsComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegaltermsRoutingModule {}
