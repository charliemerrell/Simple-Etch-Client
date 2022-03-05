import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from './models/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private baseUrl = environment.apiUrl + 'cards';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.baseUrl) as Observable<Card[]>;
  }

  getRipe() {
    return this.httpClient.get(this.baseUrl + '?ripe=true') as Observable<
      Card[]
    >;
  }

  add(card: Card) {
    return this.httpClient.post(this.baseUrl, card);
  }

  mark(card: Card, correct: boolean) {
    return this.httpClient.post(`${this.baseUrl}/${card.id}/answers`, {
      correct,
    });
  }
}
