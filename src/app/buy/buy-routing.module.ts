import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriveComponent } from './../drive/drive.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  {
    path: 'catalog',
    component: DriveComponent,
    data: { index: 8, title: 'Projects', name: 'project' },
  },
  {
    path: 'catalog/:project',
    component: DriveComponent,
    data: { index: 8, name: 'category' },
  },
  {
    path: 'catalog/:project/:category',
    component: DriveComponent,
    data: { index: 8, name: 'color' },
  },

  {
    path: 'catalog/1/3/5',
    component: DriveComponent,
    data: { index: 9 },
  },

  {
    path: 'catalog/1/3/5/:id',
    component: DriveComponent,
    data: { index: 10 },
  },

  {
    path: 'catalog/:project/:category/:color',
    component: DriveComponent,
    data: { index: 8, name: 'collection' },
  },

  {
    path: 'catalog/:project/:category/:color/:collection',
    redirectTo: 'catalog/:project/:category/:color/:collection/:size',
    pathMatch: 'full',
  },

  {
    path: 'catalog/:project/:category/:color/:collection/:size',
    component: DriveComponent,
    data: { index: 9 },
  },

  {
    path: 'catalog/:project/:category/:color/:collection/:size/:id',
    component: DriveComponent,
    data: { index: 10 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}
