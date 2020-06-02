import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishComponent } from './fish.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LoginComponent } from './login/login.component';
import { MetadataComponent } from './metadata/metadata.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ProjectsComponent } from './projects/projects.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { BuyComponent } from './buy/buy.component';
import { LegaltermsComponent } from './legalterms/legalterms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PublicationsComponent } from './publications/publications.component';
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
    VideoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
