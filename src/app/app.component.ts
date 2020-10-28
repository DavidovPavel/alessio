import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private auth: AngularFireAuth) {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Alessio Romano, artist. Originally from Roma, Italy.',
      },
    ]);

    // this.auth.signInAnonymously().then();
  }

  ngOnInit(): void {}
}
