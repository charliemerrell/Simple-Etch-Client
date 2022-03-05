import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-view-all-cards',
  templateUrl: './view-all-cards.component.html',
  styleUrls: ['./view-all-cards.component.scss'],
})
export class ViewAllCardsComponent implements OnInit {

  public cards?: Card[];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getAll().subscribe((cards) => {
      this.cards = cards;
    });
  }
}
