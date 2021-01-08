import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CarouselComponent } from './carousel/carousel.component';
import { OverlapComponent } from './carousel/overlap/overlap.component';
import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';
import { SliderComponent } from './carousel/slider/slider.component';

@NgModule({
  declarations: [MetadataComponent, CarouselComponent, OverlapComponent, SliderComponent],
  imports: [CommonModule, MetadataRoutingModule, AngularFireStorageModule],
})
export class MetadataModule {}
