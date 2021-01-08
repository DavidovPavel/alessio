import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const expand = (height = '0'): AnimationTriggerMetadata =>
  trigger('expand', [
    state('true', style({ height: '*' })),
    state('false', style({ height: `${height}` })),
    transition('true <=> false', animate(1000)),
  ]);

// export const arrow = trigger('arrow', [
//   state('true', style({ transform: 'rotate(45deg)' })),
//   state('false', style({ transform: 'rotate(-45deg)' })),
//   transition('true <=> false', animate('.3s')),
// ]);

export const opacity = trigger('opacity', [
  state('true', style({ opacity: 0 })),
  state('false', style({ opacity: 1 })),
  transition('true<=>false', animate(200)),
]);

export const show2left = trigger('show2left', [
  state('true', style({ width: '*' })),
  state('false', style({ width: '0px' })),
  transition('true <=> false', [animate('0.5s')]),
]);

export const headOnScroll = trigger('headOnScroll', [
  state('true', style({ 'margin-top': '-15vw' })),
  state('false', style({ 'margin-top': 0 })),
  transition('true <=> false', [animate('0.5s')]),
]);
