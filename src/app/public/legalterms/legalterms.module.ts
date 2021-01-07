import { LegaltermsComponent } from './legalterms.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { LegaltermsRoutingModule } from './legalterms-routing.module';

@NgModule({
  declarations: [LegaltermsComponent],
  imports: [CommonModule, LegaltermsRoutingModule, SharedModule],
})
export class LegaltermsModule {}
