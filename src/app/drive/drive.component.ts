import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CategoryComponent } from '../buy/category.component';
import { CollectionComponent } from '../buy/collection.component';
import { CollectionsComponent } from '../buy/collections.component';
import { ColorComponent } from '../buy/color.component';
import { ItemComponent } from '../buy/item/item.component';
import { ProjectsComponent as BuyProjectsComponent } from '../buy/projects.component';
import { CollaborationsComponent } from '../collaborations/collaborations.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { headOnScroll } from '../core/animations';
import { BaseComponent } from '../core/types';
import { ExhibitionsComponent } from '../exhibitions/exhibitions.component';
import { LegaltermsComponent } from '../legalterms/legalterms.component';
import { MetadataComponent } from '../metadata/metadata.component';
import { ProjectsComponent } from '../projects/projects.component';
import { PublicationsComponent } from '../publications/publications.component';
import { VideoComponent } from '../video/video.component';

export const kit = [
  MetadataComponent,
  ExhibitionsComponent,
  ProjectsComponent,
  CollaborationsComponent,
  LegaltermsComponent,
  ContactsComponent,
  PublicationsComponent,
  VideoComponent,
  BuyProjectsComponent,
  CategoryComponent,
  ColorComponent,
  CollectionsComponent,
  CollectionComponent,
  ItemComponent,
];

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
  animations: [headOnScroll],
})
export class DriveComponent implements OnInit {
  isScroll = false;
  isWhite = false;
  title = '';
  className = '';
  CurrentComponent: Type<BaseComponent>;
  crumbs$: Observable<ParamMap>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { index, title } = this.route.snapshot.data;
    this.title = title || '';
    this.CurrentComponent = kit[index];
    this.isWhite = [5, 6, 8, 9, 10, 11, 12, 13].includes(index);
    this.className = `in-${this.route.snapshot.data.index}`;
    this.crumbs$ = this.route.paramMap.pipe(filter((p) => !!p.keys.length));
  }
}
