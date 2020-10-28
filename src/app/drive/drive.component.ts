import { Component, Injector, OnInit, Type } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { CollectionComponent } from '../buy/collection.component';
import { ItemComponent } from '../buy/item/item.component';
import { CollaborationsComponent } from '../collaborations/collaborations.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { headOnScroll } from '../core/animations';
import { BaseComponent, Driver } from '../core/types';
import { ExhibitionsComponent } from '../exhibitions/exhibitions.component';
import { LegaltermsComponent } from '../legalterms/legalterms.component';
import { MetadataComponent } from '../metadata/metadata.component';
import { ProjectsComponent } from '../projects/projects.component';
import { PublicationsComponent } from '../publications/publications.component';
import { VideoComponent } from '../video/video.component';
import { ListComponent } from './../buy/list/list.component';

export const kit = [
  MetadataComponent,
  ExhibitionsComponent,
  ProjectsComponent,
  CollaborationsComponent,
  LegaltermsComponent,
  ContactsComponent,
  PublicationsComponent,
  VideoComponent,

  ListComponent,
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
  currentComponent: Type<BaseComponent>;
  injector: Injector;

  crumbs$: Observable<ParamMap>;

  constructor(
    private route: ActivatedRoute,
    private parentInjector: Injector,
  ) {}

  ngOnInit(): void {
    const { index, title } = this.route.snapshot.data;
    this.title = title || '';
    this.currentComponent = kit[index];
    this.isWhite = [5, 6, 8, 9, 10, 11, 12, 13].includes(index);
    this.className = `in-${this.route.snapshot.data.index}`;
    this.crumbs$ = this.route.paramMap.pipe(filter((p) => !!p.keys.length));

    this.injector = Injector.create({
      providers: [
        {
          provide: Driver,
          useValue: { data: this.route.snapshot.data, crumbs: this.crumbs$ },
        },
      ],
      parent: this.parentInjector,
    });
  }
}
