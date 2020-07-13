import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LangSwitchComponent } from './lang-switch.component';
import { SocialComponent } from './social.component';

@NgModule({
  declarations: [LangSwitchComponent, SocialComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [LangSwitchComponent, SocialComponent],
})
export class SharedModule {}
