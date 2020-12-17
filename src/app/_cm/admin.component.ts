import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBaseProduct, IProduct } from '../core/models/product';
import { IStoreItem } from '../core/models/store-item';
import { Products, store } from './../core/import';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  projectCollection: AngularFirestoreCollection<IStoreItem>;
  projects: Observable<IStoreItem[]>;
  notify = '';
  constructor(private readonly fs: AngularFirestore) {}

  ngOnInit(): void {}

  change(): void {
    const c = this.fs.collection<IStoreItem>('products');

    const item = (id: number) => Products.find((a) => a.id === id);

    c.get()
      .pipe(
        map((q) =>
          q.forEach((a) => {
            const data = a.data() as IProduct;
            const doc = c.doc(a.id);
            const source = item(data.id);
            const { artist = 'Alessio Romano', authorship = 'Signed by the artist', price, edition, rendering, roma_code } = source;
            doc.update({ ...data, artist, authorship, price, edition, rendering, roma_code });
          })
        )
      )
      .subscribe();
  }

  import(): void {
    Object.keys(store).forEach((k) => {
      const c = this.fs.collection<IStoreItem>(k);
      store[k].forEach((e: IStoreItem) => {
        c.add(e);
      });
    });

    const products = this.fs.collection<IBaseProduct>('products');
    Products.forEach((a) => {
      const data = {
        ...a,
        position: a.id,
        artist: 'Alessio Romano',
        authorship: 'Signed by the artist',
      };
      products.add(data);
    });

    // const catalog = this.fs.collection('catalog');
  }
}
