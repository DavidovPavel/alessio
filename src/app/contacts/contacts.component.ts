import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: ` <div class="container">
    <h1>contacts</h1>

    <h2>general ifnormation</h2>
    <p>
      info@alessioromano.com. All rights on this site and it’s contents reserved to Alessio Romano.<br />
      Alessio Romano is the owner of the respective copyright or licenses. This does not apply to any third party messages or observations.
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
    <div [style.marginTop.px]="8"><app-social></app-social></div>
  </div>`,
  styles: [
    'div.container {margin: auto; text-align: center;}',
    'p {font-size: 12px;line-height: 18px;margin: 0;padding: 0;}',
    'h1 {font-size: 22px;margin: 18px 0 0;padding:0;}',
    'h2 {font-size: 16px; margin: 6px 0 0;padding:0;}',
  ],
})
export class ContactsComponent {}
