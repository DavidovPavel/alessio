import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { groupByFour } from '@app/core/func';
import { Product } from '@app/core/models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ProductShortModel {
  id: number;
  link: string;
  url: string;
  title: string;
  size: number[];
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent implements OnInit {
  all$: Observable<ProductShortModel[][]>;

  constructor(private fs: AngularFirestore) {}

  ngOnInit(): void {
    this.all$ = this.fs
      .collection<Product>('products')
      .stateChanges()
      .pipe(
        map((a) => a.map((b) => b.payload.doc.data())),
        map((c: Product[]) =>
          c
            .map((a) => ({
              url: `product/${a.title}/${a.size[0]}/${a.title.replace(new RegExp(/\s/gi), '-')}-1.png`,
              title: a.title,
              id: a.id,
              size: a.size
            }))
            .reduce(groupByFour, [])
        )
      );
  }
}
