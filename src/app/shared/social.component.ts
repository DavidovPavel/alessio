import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  template: `
    <div fxLayout fxLayoutAlign="center" fxLayoutGap="5px">
      <a href="/"><img src="assets/in.png" alt="instagram" /></a>
      <a href="/"><img src="assets/f.png" alt="facebook" /></a>
      <a href="/"><img src="assets/o.png" alt="" /></a>
      <a href="/"><img src="assets/p.png" alt="" /></a>
      <a href="/"><img src="assets/z.png" alt="" /></a>
      <a href="/"><img src="assets/b.png" alt="" /></a>
      <a href="/"><img src="assets/t.png" alt="" /></a>
    </div>
  `,
})
export class SocialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
