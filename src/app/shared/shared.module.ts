import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { CrumbsComponent } from './components/crumbs/crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { LangSwitchComponent } from './components/lang-switch.component';
import { LeftComponent } from './components/left.component';
import { ShellComponent } from './components/shell/shell.component';
import { SocialComponent } from './components/social.component';
import { ScrollDirective } from './directives/scroll.directive';
import { PathPipe } from './pipes/path.pipe';
import { TitlePipe } from './pipes/title.pipe';

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
    PathPipe,
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
    PathPipe,
  ],
})
export class SharedModule {}
