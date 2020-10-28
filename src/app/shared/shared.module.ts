import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CrumbsComponent } from './crumbs.component';
import { ScrollDirective } from './directives/scroll.directive';
import { HeaderComponent } from './header/header.component';
import { LangSwitchComponent } from './lang-switch.component';
import { LeftComponent } from './left.component';
import { SocialComponent } from './social.component';
import { TitlePipe } from './title.pipe';

@NgModule({
  declarations: [
    LangSwitchComponent,
    SocialComponent,
    ScrollDirective,
    LeftComponent,
    HeaderComponent,
    CrumbsComponent,
    TitlePipe,
  ],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [
    FlexLayoutModule,
    LangSwitchComponent,
    SocialComponent,
    ScrollDirective,
    LeftComponent,
    HeaderComponent,
    CrumbsComponent,
    TitlePipe,
  ],
})
export class SharedModule {}
