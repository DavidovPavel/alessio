import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrumbsComponent } from './components/crumbs/crumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { LangSwitchComponent } from './components/lang-switch.component';
import { LeftComponent } from './components/left.component';
import { ShellComponent } from './components/shell/shell.component';
import { SocialComponent } from './components/social.component';
import { ScrollDirective } from './directives/scroll.directive';
import { UnderDirective } from './directives/under.directive';
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
    UnderDirective
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [
    LangSwitchComponent,
    SocialComponent,
    ScrollDirective,
    LeftComponent,
    HeaderComponent,
    CrumbsComponent,
    TitlePipe,
    ShellComponent,
    PathPipe,
    UnderDirective
  ],
})
export class SharedModule {}
