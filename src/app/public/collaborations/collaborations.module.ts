import { CollaborationsComponent } from './collaborations.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborationsRoutingModule } from './collaborations-routing.module';


@NgModule({
  declarations: [CollaborationsComponent],
  imports: [
    CommonModule,
    CollaborationsRoutingModule,
    SharedModule
  ]
})
export class CollaborationsModule { }
