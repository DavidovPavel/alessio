import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriveComponent } from '../drive/drive.component';
import { SharedModule } from '../shared/shared.module';
import { CollectionComponent } from './collection.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { UnderDirective } from './under.directive';

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
    path: 'catalog/:category/:color/:collection/:size/:id',
    component: DriveComponent,
    data: { index: 10 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}

@NgModule({
  declarations: [
    CollectionComponent,
    ItemComponent,
    UnderDirective,
    ListComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, BuyRoutingModule, SharedModule],
})
export class BuyModule {}
