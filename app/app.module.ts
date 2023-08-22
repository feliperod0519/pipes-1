import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';

import { DropDownDirective } from './dropdown.directive';
import { ttClassDirective } from './ttClass.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    DropDownDirective,
    ttClassDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
