import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import * as _ from 'underscore';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
