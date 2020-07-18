import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '0px' })),
      transition('true <=> false', [animate('0.5s')]),
    ]),
  ],
})
export class AppComponent {
  title = 'alessio';
  currentYear = new Date().getFullYear();
  isOpen = false;

  items: Observable<any[]>;

  constructor(private meta: Meta, firestore: AngularFirestore) {
    this.meta.addTags([{ name: 'description', content: 'Alessio Romano, artist. Originally from Roma, Italy.' }]);
    this.items = firestore.collection('items').valueChanges();
  }
}
