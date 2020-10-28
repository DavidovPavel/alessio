import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnder]',
})
export class UnderDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onclick(): void {
    this.el.nativeElement.children[0].style.opacity = 1;
    this.el.nativeElement.children[1].style.borderColor = 'rgb(238, 28, 36)';
  }

  @HostListener('mouseleave', ['$event.target']) mleave(): void {
    this.el.nativeElement.children[0].style.opacity = 0;
    this.el.nativeElement.children[1].style.borderColor = 'transparent';
  }
}
