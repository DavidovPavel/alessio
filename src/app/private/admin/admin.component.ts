import { IProduct } from 'src/app/core/models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { IStoreItem } from '../../core/models/store-item';
import { Metadata } from '../../services/metadata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  projectCollection: AngularFirestoreCollection<IStoreItem>;
  projects: Observable<IStoreItem[]>;
  notify = '';
  constructor(private readonly fs: AngularFirestore, private http: HttpClient) {}

  ngOnInit(): void {}

  change(): void {
    const c = this.fs.collection<IStoreItem>('products');

    // const item = (id: number) => Products.find((a) => a.id === id);

    // c.get()
    //   .pipe(
    //     map((q) =>
    //       q.forEach((a) => {
    //         const data = a.data() as IProduct;
    //         const doc = c.doc(a.id);
    //         const source = item(data.id);
    //         const { artist = 'Alessio Romano', authorship = 'Signed by the artist', price, edition, rendering, roma_code } = source;
    //         doc.update({ ...data, artist, authorship, price, edition, rendering, roma_code });
    //       })
    //     )
    //   )
    //  .subscribe();
  }

  importMetadata(): void {
    const coll = this.fs.collection('metadata');
    this.http.get('/assets/import/metadata.json').subscribe((data: Metadata[]) => {
      data.forEach((a) => {
        coll.add(a);
      });
    });
  }

  importStore(): void {
    this.http.get('/assets/import/store.json').subscribe((store) => {
      Object.keys(store).forEach((k) => {
        const c = this.fs.collection<IStoreItem>(k);
        store[k].forEach((e: IStoreItem) => {
          c.add(e);
        });
      });
    });
  }

  importProducts(): void {
    const products = this.fs.collection('products');
    this.http.get('/assets/import/products.json').subscribe((p: IProduct[]) => {
      p.forEach((a) =>
        products.add({
          ...a,
          position: a.id,
        })
      );
    });
  }
}
