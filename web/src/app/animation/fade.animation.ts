import { style, animate, trigger, transition } from '@angular/animations';

export const fadeIn = trigger(
  'fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms', style({opacity: 1}))
    ])
  ]
)

export const fadeOut = trigger(
  'fadeOut', [
    transition(':leave', [
      style({opacity: 0}),
      animate('300ms', style({opacity: 1}))
    ])
  ]
)

export const fadeInFadeOut = trigger(
  'fadeInFadeOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('300ms', style({opacity: 0}))
    ])
  ]
)
