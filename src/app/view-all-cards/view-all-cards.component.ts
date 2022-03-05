import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-view-all-cards',
  templateUrl: './view-all-cards.component.html',
  styleUrls: ['./view-all-cards.component.scss'],
})
export class ViewAllCardsComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getAll().subscribe();
  }
}
