import { FireService } from '@app/services/fire.service';
import { Size } from './../../core/models/size';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product';

import { IStoreItem } from '../../core/models/store-item';
import { Medadata } from '../../services/metadata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  projectCollection: AngularFirestoreCollection<IStoreItem>;
  projects: Observable<IStoreItem[]>;
  notify = '';

  uploadPercent: Observable<number>;

  products$: Observable<Product[]>;

  productName = new FormControl();
  productSize = new FormControl();
  productFolder = new FormControl();

  constructor(private fire: FireService, private http: HttpClient, private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.products$ = this.fire.getCollection('products', (ref) => ref.orderBy('collection') );
  }

  uploadFiles(target: HTMLInputElement): void {
    const length = target.files.length;
    const name = this.productName.value;
    const size = this.productSize.value;
    const big = this.productFolder.value ? 'big/' : '';

    for (let i = 0; i < length; i++) {
      const file = target.files.item(i);
      const filePath = `product/${name}/${size}/${big}${file.name}`;
      console.log(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent = task.percentageChanges();
    }
  }

  change(): void {
    // const c = this.fs.collection<IStoreItem>('products');

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
    // const coll = this.fs.collection('metadata');
    // this.http.get('/assets/import/metadata.json').subscribe((data: Medadata[]) => {
    //   data.forEach((a) => {
    //     coll.add(a);
    //   });
    // });
  }

  importStore(): void {
    // this.http.get('/assets/import/store.json').subscribe((store) => {
    //   Object.keys(store).forEach((k) => {
    //     const c = this.fs.collection<IStoreItem>(k);
    //     store[k].forEach((e: IStoreItem) => {
    //       c.add(e);
    //     });
    //   });
    // });
  }

  importProducts(): void {
    const products = this.fire.getCollectionRef('products');
    this.http.get('/assets/import/products.json').subscribe((p: Product[]) => {
      p.forEach((a) =>
        products.add({
          ...a,
          position: a.id,
        })
      );
    });
  }
}
