import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from './../shared/shared.module';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { OneOfSectionComponent } from './one-of-section/one-of-section.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [VideoComponent, OneOfSectionComponent, PreviewComponent],
  imports: [CommonModule, VideoRoutingModule, SharedModule, AngularFireStorageModule],
})
export class VideoModule {}
