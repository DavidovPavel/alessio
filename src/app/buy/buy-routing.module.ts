import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'project', pathMatch: 'full' },
  {
    path: 'project',
    component: ListComponent,
    data: { name: 'project' },
  },
  {
    path: 'project/:project',
    component: ListComponent,
    data: { name: 'category' },
  },
  {
    path: 'project/:project/:category',
    component: ListComponent,
    data: { name: 'color' },
  },

  {
    path: 'project/:project/:category/:color',
    component: ListComponent,
    data: { name: 'collection' },
  },

  {
    path: 'project/:project/:category/:color/:collection/:size',
    component: CollectionComponent,
  },

  {
    path: 'project/:project/:category/:color/:collection/:size/:id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}
