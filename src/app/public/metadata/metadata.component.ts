import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Metadata, MetadataService } from './../../services/metadata.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
})
export class MetadataComponent implements OnInit {
  data$: Observable<Metadata[]>;

  constructor(private service: MetadataService) {}

  ngOnInit() {
    this.data$ = this.service.getAll();
  }
}
