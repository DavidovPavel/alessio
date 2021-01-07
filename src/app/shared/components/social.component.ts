import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  styles: [':host {bottom: 1.9vw;position: fixed; left: 50%; transform: translate(-50%)}', 'a {line-height: 0;}', 'img {width: 1.9vw;}'],
  template: `
    <div fxLayout fxLayoutAlign="center" fxLayoutGap=".45vw">
      <a href="/"><img src="assets/ssm/in{{ prefix }}.png" alt="instagram" /></a>
      <a href="/"><img src="assets/ssm/f{{ prefix }}.png" alt="facebook" /></a>
      <a href="/"><img src="assets/ssm/o{{ prefix }}.png" alt="" /></a>
      <a href="/"><img src="assets/ssm/p{{ prefix }}.png" alt="" /></a>
      <a href="/"><img src="assets/ssm/z{{ prefix }}.png" alt="you tube" /></a>
      <a href="/"><img src="assets/ssm/b{{ prefix }}.png" alt="twitter" /></a>
      <a href="/"><img src="assets/ssm/t{{ prefix }}.png" alt="" /></a>
    </div>
  `,
})
export class SocialComponent implements OnInit {
  @Input() bg: 'dark' | 'light' = 'light';

  get prefix() {
    return this.bg === 'dark' ? '_' : '';
  }

  constructor() {}

  ngOnInit(): void {}
}
