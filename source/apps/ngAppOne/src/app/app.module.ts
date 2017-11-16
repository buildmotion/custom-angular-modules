import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleLoggerModule, SimpleLoggerService } from 'custom-angular-modules';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleLoggerModule
  ],
  providers: [
    SimpleLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
