import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CaruselModule } from './../../shared/carusel/carusel.module';
import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataComponent } from './metadata.component';

@NgModule({
  declarations: [MetadataComponent],
  imports: [CommonModule, MetadataRoutingModule, CaruselModule],
})
export class MetadataModule {}
