import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuyComponent } from './buy/buy.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { FishComponent } from './fish.component';
import { LegaltermsComponent } from './legalterms/legalterms.component';
import { LoginComponent } from './login/login.component';
import { MetadataComponent } from './metadata/metadata.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  { path: 'en', component: FishComponent },
  { path: 'it', component: FishComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'metadata', component: MetadataComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'legalterms', component: LegaltermsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'video', component: VideoComponent },
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
