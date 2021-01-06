import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriveComponent } from './drive/drive.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buy',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then((m) => m.BuyModule),
  },
  {
    path: 'cm',
    loadChildren: () => import('./private/admin/cm.module').then((m) => m.CmModule),
  },

  {
    path: 'metadata',
    loadChildren: () => import('./public/metadata/metadata.module').then((m) => m.MetadataModule),
  },
  { path: 'exhibitions', component: DriveComponent, data: { index: 1 } },
  { path: 'projects', component: DriveComponent, data: { index: 2 } },
  { path: 'collaborations', component: DriveComponent, data: { index: 3 } },
  { path: 'legalterms', component: DriveComponent, data: { index: 4 } },
  { path: 'contacts', component: DriveComponent, data: { index: 5 } },
  { path: 'publications', component: DriveComponent, data: { index: 6 } },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then((m) => m.VideoModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
