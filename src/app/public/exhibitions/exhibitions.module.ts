import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { CaruselModule } from './../../shared/carusel/carusel.module';
import { SharedModule } from './../../shared/shared.module';
import { ExhibitionsRoutingModule } from './exhibitions-routing.module';
import { ExhibitionsComponent } from './exhibitions.component';

@NgModule({
  declarations: [ExhibitionsComponent],
  imports: [CommonModule, ExhibitionsRoutingModule, SharedModule, AngularFireStorageModule, CaruselModule],
})
export class ExhibitionsModule {}
