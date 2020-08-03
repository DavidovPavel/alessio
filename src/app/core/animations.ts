import { state, style, transition, trigger, animate } from '@angular/animations';

export const expand = (height = 0) => trigger('expand', [
  state('true', style({ height: '*' })),
  state('false', style({ height: `${height}px` })),
  transition('true <=> false', animate(1000)),
]);

export const opacity = trigger('opacity', [
  state('true', style({ opacity: 0 })),
  state('false', style({ opacity: 1 })),
  transition('true<=>false', animate(1000)),
]);
