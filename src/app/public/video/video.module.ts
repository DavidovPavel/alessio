import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from './../../shared/shared.module';
import { MiddleComponent } from './middle/middle.component';
import { PreviewComponent } from './preview/preview.component';
import { SectionComponent } from './section/section.component';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent, SectionComponent, PreviewComponent, MiddleComponent],
  imports: [CommonModule, VideoRoutingModule, SharedModule, AngularFireStorageModule],
})
export class VideoModule {}
