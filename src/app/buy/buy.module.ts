import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './buy.component';
import { SharedModule } from '../shared/shared.module';
import { ColorComponent } from './color/color.component';
import { CategoryComponent } from './category/category.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: BuyComponent },
  { path: 'projects/:id', component: ColorComponent },
  { path: 'projects/:id/colors/:id', component: CategoryComponent },
  { path: 'projects/:id/colors/:id/category/:id', component: CollectionsComponent },
  { path: 'projects/:id/colors/:id/category/:id/collections/:id/180', component: CollectionComponent },
  { path: 'projects/:id/colors/:id/category/:id/collections/:id/180/:id', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}

@NgModule({
  declarations: [BuyComponent, ColorComponent, CategoryComponent, CollectionsComponent, CollectionComponent, ItemComponent],
  imports: [CommonModule, BuyRoutingModule, SharedModule],
})
export class BuyModule {}
