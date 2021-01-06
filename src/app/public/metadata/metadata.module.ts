import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [MetadataComponent, CarouselComponent],
  imports: [
    CommonModule,
    MetadataRoutingModule,
    AngularFireStorageModule
  ]
})
export class MetadataModule { }
