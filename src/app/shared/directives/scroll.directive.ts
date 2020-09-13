import { Directive, Output, EventEmitter, HostListener, ElementRef, Renderer2 } from '@angular/core';
export interface IScroll {
  direct: -1 | 1 | 0;
  scrollTop: number;
}
@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  private scrollTop = 0;
  constructor(private el: ElementRef, private re: Renderer2) {}

  @Output() read = new EventEmitter<IScroll>();

  @HostListener('scroll', ['$event.target']) onscroll(e: Element) {

    const he = this.re.parentNode(this.el.nativeElement).querySelector('app-header');
    const { scrollHeight, scrollTop, clientHeight } = e;

    if (scrollHeight < he.clientHeight + clientHeight)  return;

    if (scrollTop < this.scrollTop) {
      this.read.emit({ direct: -1, scrollTop });
    } else {
      this.read.emit({ direct: 1, scrollTop });
    }

    if (scrollHeight === scrollTop + clientHeight || scrollHeight === 0) {
      this.read.emit({ direct: 0, scrollTop });
    }

    this.scrollTop = scrollTop;
  }
}
