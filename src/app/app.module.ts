import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PriceboxComponent } from './pricebox/pricebox.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PriceboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
