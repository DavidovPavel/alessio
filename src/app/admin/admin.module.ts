import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

const Matetial = [MatButtonModule, MatToolbarModule, MatDividerModule];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, ...Matetial],
})
export class AdminModule {}
