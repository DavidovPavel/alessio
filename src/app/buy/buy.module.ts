import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from '../shared/shared.module';
import { BuyRoutingModule } from './buy-routing.module';
import { CollectionComponent } from './collection.component';
import { ImgComponent } from './item/img/img.component';
import { CheckComponent, ItemComponent, OpenBigImgComponent } from './item/item.component';
import { LinkPipe } from './item/link.pipe';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CollectionComponent,
    ItemComponent,
    ListComponent,
    ListItemComponent,
    ImgComponent,
    OpenBigImgComponent,
    CheckComponent,
    LinkPipe
  ],
  imports: [CommonModule, BuyRoutingModule, SharedModule, MatDialogModule],
})
export class BuyModule {}
