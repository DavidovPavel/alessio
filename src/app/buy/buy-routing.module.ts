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
        path: ':id/:size',
        component: ProductComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'projects/:id',
        component: ProjectComponent,
      },
      {
        path: 'projects/:id/categories',
        component: CategoriesComponent,
      },

      {
        path: 'project/:id/categories/:category',
        component: CategoryComponent,
      },

      {
        path: 'project/:id/categories/:category/colors',
        component: ColorsComponent,
      },

      {
        path: 'project/:id/categories/:category/colors/:color',
        component: ColorComponent,
      },

      {
        path: 'project/:id/categories/:category/colors/:color/collectons',
        component: CollectionsComponent,
      },

      {
        path: 'project/:id/categories/:category/colors/:color/collectons/:collection',
        component: CollectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}
