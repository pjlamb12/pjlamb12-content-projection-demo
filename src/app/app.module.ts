import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { ComplexCardComponent } from './complex-card/complex-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BasicCardComponent, ComplexCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
