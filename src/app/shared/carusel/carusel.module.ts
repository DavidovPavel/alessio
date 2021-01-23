import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CarouselComponent } from './carousel.component';
import { OverlapComponent } from './overlap/overlap.component';
import { PathPipe } from './path.pipe';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [CarouselComponent, OverlapComponent, SliderComponent, PathPipe],
  imports: [CommonModule, AngularFireStorageModule],
  exports: [CarouselComponent],
})
export class CaruselModule {}
