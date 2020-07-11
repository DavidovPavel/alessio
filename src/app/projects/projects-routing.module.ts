import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsComponent } from './collections/collections.component';
import { ColorComponent } from './color/color.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':id', component: ColorComponent },
  { path: ':id/:color', component: ProjectComponent },
  { path: ':id/:color/:category', component: CollectionsComponent },
  { path: ':id/:color/:category/:collections/:size', component: ItemsComponent },
  { path: ':id/:color/:category/:collections/:size/:pid', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
