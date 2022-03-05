import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  cardForm = new FormGroup({
    question: new FormControl('', Validators.required),
    answer: new FormControl('', Validators.required),
  });

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.cardService.add(this.cardForm.value).subscribe({
      next: () => this.cardForm.reset(),
      error: (err) => {
        console.error(err);
        alert('Failed to add card');
      },
    });
  }
}
