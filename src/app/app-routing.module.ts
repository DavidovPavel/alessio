import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'exhibitions',
    loadChildren: () =>
      import('./public/exhibitions/exhibitions.module').then((m) => m.ExhibitionsModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./public/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'collaborations',
    loadChildren: () =>
      import('./public/collaborations/collaborations.module').then((m) => m.CollaborationsModule),
  },
  {
    path: 'legalterms',
    loadChildren: () =>
      import('./public/legalterms/legalterms.module').then((m) => m.LegaltermsModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./public/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'publications',
    loadChildren: () =>
      import('./public/publications/publications.module').then((m) => m.PublicationsModule),
  },
  {
    path: 'video',
    loadChildren: () => import('./public/video/video.module').then((m) => m.VideoModule),
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
