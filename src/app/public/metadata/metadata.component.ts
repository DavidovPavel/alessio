import { Component, OnInit } from '@angular/core';
import { Medadata, MetadataService } from '@app/services/metadata.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
})
export class MetadataComponent implements OnInit {
  data$: Observable<Medadata[]>;

  constructor(private service: MetadataService) {}

  ngOnInit() {
    this.data$ = this.service.getAll();
  }
}
