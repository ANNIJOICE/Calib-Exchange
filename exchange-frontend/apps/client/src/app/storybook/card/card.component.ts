import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exchange-frontend-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() content = '😄';
  @Output() btnClicked = new EventEmitter<boolean>();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

