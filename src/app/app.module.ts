import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { LegaltermsComponent } from './legalterms/legalterms.component';
import { LoginComponent } from './login/login.component';
import { MetadataComponent } from './metadata/metadata.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicationsComponent } from './publications/publications.component';
import { SharedModule } from './shared/shared.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    LoginComponent,
    MetadataComponent,
    ExhibitionsComponent,
    CollaborationsComponent,
    LegaltermsComponent,
    ContactsComponent,
    PublicationsComponent,
    VideoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
