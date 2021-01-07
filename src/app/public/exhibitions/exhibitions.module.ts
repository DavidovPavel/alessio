import { ExhibitionsComponent } from './exhibitions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ExhibitionsRoutingModule } from './exhibitions-routing.module';

@NgModule({
  declarations: [ExhibitionsComponent],
  imports: [CommonModule, ExhibitionsRoutingModule, SharedModule],
})
export class ExhibitionsModule {}
