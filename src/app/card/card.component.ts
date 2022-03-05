import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public revealing!: boolean;
  @Input() public card!: Card;
  @Output() reveal = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClickReveal() {
    this.revealing = true;
    this.reveal.emit();
  }
}
