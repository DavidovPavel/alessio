import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { FishComponent } from './fish.component';
import { LegaltermsComponent } from './legalterms/legalterms.component';
import { LoginComponent } from './login/login.component';
import { MetadataComponent } from './metadata/metadata.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    SubscribeComponent,
    LoginComponent,
    MetadataComponent,
    ExhibitionsComponent,
    ProjectsComponent,
    CollaborationsComponent,
    BuyComponent,
    LegaltermsComponent,
    ContactsComponent,
    PublicationsComponent,
    VideoComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
