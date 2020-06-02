import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  template: `
    <div style="text-align: right;margin: 25px 0 20px;"><a routerLink="en">ENG</a>/<a routerLink="it">IT</a></div>
    <div style="width: 860px;">
      <div style="float:left;"><img src="assets/photo1.png" alt="Alessio Romano. Metadata" /></div>
      <p>
        Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to Russia when hi was so young. In Moscow he
        have got a russian name. He never mentioned his original ancestry until the end of carrier in marketing and advertising. Stroganov
        University of Art & Design /Graphic & Industrial Design. Russian/native/, English, German, Italian.<br />
        Mac user: Quark XPress, Keynote, Photoshop, Illustrator. Experience in building of Interactive business/ from scratch/, brands,
        interactive and communication strategy. Excellent skills in painting, drawings and inustrial design. Worked on TTL, ATL, BTL,
        Digital and Interactive campaigns. Founder/Owner/MD of “Trend Maker Online”/Created and developed online business
        /www.trendmakeronline.com/ SMM Group on FB. <br />
        Consultant at Advance digital agency/2011-2012/ Parter/Deputy managing/Creative director of “360D” interactive agency. Create brand
        positioning. Created and developed “6D” business process and strategy for affiliation with global international network/Publicis
        Group/. Build agency structure and agency team Developed selling strategy. Worked on all agencyʼs brands. www.360D.ru Creative
        director/ MRM World Wide Moscow in ADV Group/ Client list/Coca Cola, Nestle, Bayer, InBev, Bee Line, Winston .../ Creative
        director/Progression/Client list/Klinskoe, Siberian Crown, Stella Artois, Nesquik, Shok, Kit Kat, Gillette /Free-lance creative at
        FCB MA/Sochi 2014/
      </p>
    </div>
    <div class="ss">
      <a href="/"><img src="assets/in.png" alt="instagram" /></a>
      <a href="/"><img src="assets/f.png" alt="facebook" /></a>
      <a href="/"><img src="assets/o.png" alt="" /></a>
      <a href="/"><img src="assets/p.png" alt="" /></a>
      <a href="/"><img src="assets/z.png" alt="" /></a>
      <a href="/"><img src="assets/b.png" alt="" /></a>
      <a href="/"><img src="assets/t.png" alt="" /></a>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 853px;
        margin: 0 auto;
      }
      p {
        font-size: 1.2em;
        line-height: 2em;
        margin-left: 267px;
      }
      .ss a {
        margin-right: 5px;
      }
    `,
  ],
})
export class FishComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
