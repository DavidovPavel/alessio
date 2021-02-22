import { Component, OnInit } from '@angular/core';
import { FireService } from '@app/services/fire.service';
import { Observable } from 'rxjs';

import { expand } from '../../core/animations';
import { Exhibition } from '../../core/models/exhibition';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss'],
  animations: [expand()],
})
export class ExhibitionsComponent implements OnInit {
  items$: Observable<Exhibition[]>;
  constructor(private fire: FireService) {}

  ngOnInit(): void {
    this.items$ = this.fire.getCollection<Exhibition>('exhibition', (ref) => ref.orderBy('id'));
  }
}
