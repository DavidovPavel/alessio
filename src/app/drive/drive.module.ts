import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveComponent } from './drive.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DriveComponent],
  imports: [CommonModule, SharedModule],
  exports: [DriveComponent],
})
export class DriveModule {}
