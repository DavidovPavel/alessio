import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FishComponent } from './fish.component';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: 'en', component: FishComponent },
  { path: 'it', component: FishComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
