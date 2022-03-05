import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss'],
})
export class AnswerCardComponent implements OnInit {
  public card?: Card;
  public exhaustedCards = false;
  setNextCard!: () => void;

  public revealing = false;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getRipe().subscribe((cards) => {
      this.setNextCard = this.createCardIterator(cards);
      this.setNextCard();
    });
  }

  createCardIterator(cards: Card[]) {
    let i = -1;
    const setNextCard = () => {
      i++;
      if (i < cards.length) {
        this.card = cards[i];
      } else {
        this.card = undefined;
        this.exhaustedCards = true;
      }
    };
    return setNextCard;
  }

  onClickReveal() {
    this.revealing = true;
  }

  onMark(correct: boolean) {
    this.cardService.mark(this.card as Card, correct).subscribe(() => {
      this.revealing = false;
      this.setNextCard();
    });
  }
}
