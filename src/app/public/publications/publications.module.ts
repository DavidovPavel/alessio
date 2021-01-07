import { PublicationsComponent } from './publications.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';


@NgModule({
  declarations: [PublicationsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    SharedModule
  ]
})
export class PublicationsModule { }
