import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriveComponent } from './drive.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DriveComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [DriveComponent],
})
export class DriveModule {}
