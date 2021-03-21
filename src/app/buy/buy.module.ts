import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '../shared/shared.module';
import { BigPictureComponent } from './big-picture.component';
import { BuyRoutingModule } from './buy-routing.module';
import { CollectionComponent } from './collection.component';
import { CrumbsComponent } from './crumbs/crumbs.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { BuyComponent } from './pages/buy/buy.component';
import { CategoryComponent } from './pages/category/category.component';
import { CollectionComponent as CollectionListComponent } from './pages/collection/collection.component';
import { ColorComponent } from './pages/color/color.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PictureComponent } from './picture/picture.component';
import { LinkPipe } from './product/link.pipe';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [
    CollectionComponent,
    ProductComponent,
    ListComponent,
    ListItemComponent,
    PictureComponent,
    BigPictureComponent,
    LinkPipe,
    ProjectsComponent,
    BuyComponent,
    CrumbsComponent,
    CategoryComponent,
    ColorComponent,
    CollectionListComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, BuyRoutingModule, SharedModule, MatDialogModule, AngularFireStorageModule, FlexLayoutModule],
})
export class BuyModule {}
