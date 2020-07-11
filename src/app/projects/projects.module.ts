import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectComponent } from './project/project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ColorComponent } from './color/color.component';
import { CollectionsComponent } from './collections/collections.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent, ColorComponent, CollectionsComponent, ItemsComponent, ItemComponent],
  imports: [CommonModule, ProjectsRoutingModule, FlexLayoutModule],
})
export class ProjectsModule {}
