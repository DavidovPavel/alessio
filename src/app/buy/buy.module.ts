import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '../shared/shared.module';
import { BigPictureComponent } from './big-picture.component';
import { BuyRoutingModule } from './buy-routing.module';
import { CollectionComponent } from './collection.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { PictureComponent } from './picture/picture.component';
import { LinkPipe } from './product/link.pipe';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    CollectionComponent,
    ProductComponent,
    ListComponent,
    ListItemComponent,
    PictureComponent,
    BigPictureComponent,
    LinkPipe,
  ],
  imports: [CommonModule, BuyRoutingModule, SharedModule, MatDialogModule, AngularFireStorageModule, FlexLayoutModule],
})
export class BuyModule {}
