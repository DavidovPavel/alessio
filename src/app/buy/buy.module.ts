import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './buy.component';

const routes: Routes = [{ path: '', redirectTo: '/projects/1/black' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyRoutingModule {}

@NgModule({
  declarations: [BuyComponent],
  imports: [CommonModule, BuyRoutingModule],
})
export class BuyModule {}
