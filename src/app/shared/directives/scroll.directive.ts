import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
export interface IScroll {
  direct: -1 | 1 | 0;
  scrollTop: number;
}
@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  private scrollTop = 0;

  @Output() read = new EventEmitter<IScroll>();

  @HostListener('scroll', ['$event.target']) onscroll(e: Element) {
    const { scrollHeight, scrollTop, clientHeight } = e;

    if (scrollTop < this.scrollTop) {
      this.read.emit({ direct: -1, scrollTop });
    } else {
      this.read.emit({ direct: 1, scrollTop });
    }

    if (scrollHeight <= scrollTop + clientHeight) {
      this.read.emit({ direct: 0, scrollTop });
    }

    this.scrollTop = scrollTop;
  }
}
