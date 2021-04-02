import { Component, OnInit } from '@angular/core';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { groupByFour } from '@app/core/func';
import { Product } from '@app/core/models/product';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  groups$: Observable<Product[][]>;
  size: number;
  constructor(private route: ActivatedRoute, private fs: AngularFirestore) {}

  ngOnInit(): void {
    const queryFn = (a: ParamMap) => (ref: CollectionReference) => {
      return ref
        .where('project', '==', +a.get('project'))
        .where('category', '==', +a.get('category'))
        .orderBy('id');
    };

    this.groups$ = this.route.paramMap.pipe(
      tap((a) => (this.size = +a.get('size'))),
      switchMap((a) => this.fs.collection<Product>('products', queryFn(a)).valueChanges()),
      map((c) =>
        c
          .map((a) => ({ url: `product/${a.title}/${this.size}/${a.title.replace(' ', '-')}-1.png`, title: a.title, id: a.id }))
          .reduce(groupByFour, [])
      )
    );
  }
}
