import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllCardsComponent } from './view-all-cards/view-all-cards.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AddCardComponent } from './add-card/add-card.component';
import { CardComponent } from './card/card.component';
import { AnswerCardComponent } from './answer-card/answer-card.component';

@NgModule({
  declarations: [AppComponent, ViewAllCardsComponent, LoginComponent, AddCardComponent, CardComponent, AnswerCardComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
