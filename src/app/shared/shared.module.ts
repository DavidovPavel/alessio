import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { ScrollDirective } from './directives/scroll.directive';
import { LangSwitchComponent } from './lang-switch.component';
import { LeftComponent } from './left.component';
import { SocialComponent } from './social.component';
import { HeaderComponent } from './header/header.component';
import { CrumbsComponent } from './crumbs.component';

@NgModule({
  declarations: [LangSwitchComponent, SocialComponent, ScrollDirective, LeftComponent, HeaderComponent, CrumbsComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  exports: [FlexLayoutModule, LangSwitchComponent, SocialComponent, ScrollDirective, LeftComponent, HeaderComponent, CrumbsComponent],
})
export class SharedModule {}
