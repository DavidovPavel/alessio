import { ProductListComponent } from './pages/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ColorComponent } from './pages/color/color.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ShellComponent } from './pages/shell/shell.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: ShowcaseComponent },

      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'projects/:id',
        pathMatch: 'full',
        component: ProjectComponent,
      },

      {
        path: 'projects/:id/:category',
        component: CategoryComponent,
      },

      // {
      //   path: 'project/:id/3/5',
      //   component: ProductListComponent,
      // },

      {
        path: 'projects/:id/:category/:color',
        component: ColorComponent,
      },

      {
        path: 'projects/:id/:category/:color/:collection',
        component: CollectionComponent,
      },

      {
        path: 'projects/:id/:category/:color/:collection/:size',
        component: ProductListComponent,
      },

      {
        path: ':id/:size',
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
