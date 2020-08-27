import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: ` <div class="title">
      <h1>&nbsp;</h1>
      <app-lang-switch></app-lang-switch>
    </div>
    <h1>contacts</h1>
    <h2>general information</h2>
    <p>
      info@alessioromano.com. All rights on this site and it’s contents reserved to Alessio Romano.<br />
      Alessio Romano is the owner of the respective copyright or licenses. This does not apply<br />
      to any third party messages or observations.
    </p>
    <h2>contact</h2>
    <p>
      If you have any questions, please contact us. Max Bauer, head of care.<br />
      Phone number +7 (909) 159 9999 or send us an email.
    </p>
    <h2>art</h2>
    <p>
      For Art requests, please contact Max Bauer (Curator)<br />
      max@alessioromano.com
    </p>
    <h2>partner services</h2>
    <p>alessio@alessioromano.com</p>
    <h2>phone number</h2>
    <p>
      +7 (909) 159 9999<br />
      Monday to Friday from 11:11 am to 18:18 pm CET
    </p>
    <h2>follow</h2>
    <div [style.marginTop.vw]="0.43"><app-social></app-social></div>
    <p [style.height.vw]="3.8">&nbsp;</p>`,
  styles: [
    `
      :host {
        text-align: center;
        display: block;
        padding: 0 12% 0 13%;
      }
      p {
        font-size: 1.1vw;
        line-height: 1.56vw;
        margin: 0;
        padding: 0;
        letter-spacing: -0.012vw;
      }
      h1 {
        font-size: 1.9vw;
        margin: 0;
        padding: 0;
      }
      h2 {
        font-size: 1.45vw;
        margin: 0.68vw 0 0;
        padding: 0;
      }
    `,
  ],
})
export class ContactsComponent {}
