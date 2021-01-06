import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';

const Matetial = [MatButtonModule, MatToolbarModule, MatDividerModule];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule, ...Matetial],
})
export class CmModule {}
