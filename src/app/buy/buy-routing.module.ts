import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionComponent } from './collection.component';
import { BuyComponent } from './pages/buy/buy.component';
import { CategoryComponent } from './pages/category/category.component';
import { CollectionComponent as CollectionListComponent } from './pages/collection/collection.component';
import { ColorComponent } from './pages/color/color.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: BuyComponent,
    children: [
      { path: '', redirectTo: 'project', pathMatch: 'full' },
      {
        path: 'project',
        component: ProjectsComponent,
      },
      {
        path: 'project/:project',
        component: CategoryComponent,
        data: { name: 'category' },
      },
      {
        path: 'project/:project/:category',
        component: ColorComponent,
        data: { name: 'color' },
      },

      {
        path: 'project/:project/:category/:color',
        component: CollectionListComponent,
        data: { name: 'collection' },
      },

      {
        path: 'project/:project/:category/:color/:size',
        component: ProductListComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}
