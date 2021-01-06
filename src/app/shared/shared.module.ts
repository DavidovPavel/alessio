import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CrumbsComponent } from './components/crumbs/crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { ScrollDirective } from './directives/scroll.directive';
import { LangSwitchComponent } from './lang-switch.component';
import { LeftComponent } from './left.component';
import { PathPipe } from './path.pipe';
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
    ShellComponent,
    PathPipe
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
    ShellComponent,
    PathPipe
  ],
})
export class SharedModule {}
