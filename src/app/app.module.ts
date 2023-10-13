import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { basicCssDirectives } from './shared/components/directives/basic-css.directives';
import { RendercssDirective } from './rendercss.directive';
import { CreditCardDirective } from './shared/components/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicCssDirectives,
    RendercssDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
