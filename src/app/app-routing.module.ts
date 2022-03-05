import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { AnswerCardComponent } from './answer-card/answer-card.component';
import { CanActivateAppService } from './can-activate-app.service';
import { LoginComponent } from './login/login.component';
import { ViewAllCardsComponent } from './view-all-cards/view-all-cards.component';

const routes: Routes = [
  {
    path: 'all',
    component: ViewAllCardsComponent,
    canActivate: [CanActivateAppService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'add',
    component: AddCardComponent,
  },
  {
    path: 'answer',
    component: AnswerCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
