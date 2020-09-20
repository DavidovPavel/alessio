import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @Input('appHover') isActive = false;
  constructor(private el: ElementRef) {}

  @HostListener('click') onclick() {
    if (!this.isActive) {
      this.el.nativeElement.children[0].style.opacity = 1;
      this.el.nativeElement.children[1].style.borderColor = 'rgb(238, 28, 36)';
    }
  }

  @HostListener('mouseleave', ['$event.target']) mleave() {
    if (!this.isActive) {
      this.el.nativeElement.children[0].style.opacity = 0;
      this.el.nativeElement.children[1].style.borderColor = 'rgb(0, 0, 0)';
    }
  }
}
