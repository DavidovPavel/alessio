import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'order', component: OrderComponent },
      { path: 'address', component: AddressComponent },
      { path: 'info', component: InfoComponent },
    ],
  },
];

@NgModule({
  declarations: [AccountComponent, OrderComponent, DashboardComponent, AddressComponent, InfoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [],
  providers: [],
})
export class AccountModule {}
