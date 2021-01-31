import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnder]',
})
export class UnderDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onclick(): void {
    const a = this.el.nativeElement.querySelector('i.under');
    if (a) a.style.opacity = 1;
    // if (b) b.style.borderColor = 'rgb(238, 28, 36)';
  }

  @HostListener('mouseleave', ['$event.target']) mleave(): void {
    const a = this.el.nativeElement.querySelector('i.under');
    if (a) a.style.opacity = 0;
    // if (b) b.style.borderColor = 'transparent';
  }
}
