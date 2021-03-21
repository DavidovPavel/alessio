import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ListItem } from '../list-item';
import { PointInfo } from '../point-info';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  imgUrl$: Observable<string>;

  @Input() item: ListItem;
  @Input() meta: PointInfo;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    const name = this.meta.name;
    const id = this.item.id;
    const ref = this.storage.ref(`${name}/${id}.png`);

    this.imgUrl$ = ref.getDownloadURL().pipe(
      map((s) => s as string),
      catchError((e) => {
        console.warn(e);
        return EMPTY;
      })
    );
  }
}
