import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from './../shared/shared.module';
import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, VideoRoutingModule, SharedModule, AngularFireStorageModule ],
})
export class VideoModule {}
