import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './../../shared/components/shell/shell.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [{ path: '', component: ContactsComponent, data: { mainClass: { light: true, contacts: true } } }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
