import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LangSwitchComponent } from './lang-switch.component';
import { SocialComponent } from './social.component';
import { ScrollDirective } from './directives/scroll.directive';

@NgModule({
  declarations: [LangSwitchComponent, SocialComponent, ScrollDirective],
  imports: [CommonModule, FlexLayoutModule],
  exports: [LangSwitchComponent, SocialComponent, ScrollDirective],
})
export class SharedModule {}
