import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private baseUrl = environment.apiUrl + 'cards/';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.baseUrl);
  }
}
