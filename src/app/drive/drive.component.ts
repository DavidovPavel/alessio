import { Component, Injector, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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

export const kit = [
  MetadataComponent,
  ExhibitionsComponent,
  ProjectsComponent,
  CollaborationsComponent,
  LegaltermsComponent,
  ContactsComponent,
  PublicationsComponent,
  VideoComponent,
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

  url$: Observable<string[]>;

  constructor(private route: ActivatedRoute, private parentInjector: Injector) {}

  ngOnInit(): void {
    const { index, title } = this.route.snapshot.data;
    this.title = title || '';
    this.currentComponent = kit[index];
    this.isWhite = [5, 6].includes(index);
    this.className = `in-${this.route.snapshot.data.index}`;
    this.url$ = this.route.url.pipe(map((s) => s.map((a) => a.path)));

    this.injector = Injector.create({
      providers: [
        {
          provide: Driver,
          useValue: { data: this.route.snapshot.data, crumbs: this.route.paramMap.pipe(filter(a => !!a.keys.length)) },
        },
      ],
      parent: this.parentInjector,
    });
  }
}
