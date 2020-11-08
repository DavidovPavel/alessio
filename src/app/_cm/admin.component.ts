import { Products, store } from './../core/import';
import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IBaseProduct, IProduct, IStoreItem } from './../core/types';

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

    c.get()
      .pipe(
        map((q) =>
          q.forEach((a) => {
            const data = a.data() as IProduct;
            const doc = c.doc(a.id);
            doc.update({ ...data, project: 1 });
          }),
        ),
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
