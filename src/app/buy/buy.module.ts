import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriveComponent } from '../drive/drive.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category.component';
import { CollectionComponent } from './collection.component';
import { CollectionsComponent } from './collections.component';
import { ColorComponent } from './color.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: DriveComponent, data: { index: 8, title: 'Projects' } },
  { path: 'projects/:project_id', component: DriveComponent, data: { index: 9 } },
  { path: 'projects/:project_id/category/:category_id', component: DriveComponent, data: { index: 10 } },
  {
    path: 'projects/:project_id/category/:category_id/colors/:color_id',
    component: DriveComponent,
    data: { index: 11 },
  },
  {
    path: 'projects/:project_id/category/:category_id/colors/:color_id/collections/:collection_id/180',
    component: DriveComponent,
    data: { index: 12 },
  },
  {
    path: 'projects/:project_id/category/:category_id/colors/:color_id/collections/:collection_id/180/:id',
    component: DriveComponent,
    data: { index: 13 },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ListComponent],
})
export class BuyRoutingModule {}

@NgModule({
  declarations: [
    ProjectsComponent,
    ColorComponent,
    CategoryComponent,
    CollectionsComponent,
    CollectionComponent,
    ItemComponent,
  ],
  imports: [CommonModule, BuyRoutingModule, SharedModule],
})
export class BuyModule {}
