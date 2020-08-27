import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { expand, headOnScroll, show2left } from './core/animations';
import { WorkerService } from './worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [show2left, headOnScroll, expand()],
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isOpen = false;
  isScroll = false;
  isExpand = false;

  items: Observable<any[]>;

  constructor(private worker: WorkerService, private meta: Meta, firestore: AngularFirestore) {
    this.meta.addTags([{ name: 'description', content: 'Alessio Romano, artist. Originally from Roma, Italy.' }]);
    this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {}

}
