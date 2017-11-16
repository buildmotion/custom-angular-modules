import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SimpleLoggerModule, SimpleLoggerService } from 'custom-angular-modules';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleLoggerModule,
    AppRoutingModule, // defines available app routes;
    RouterModule, // required to engage <router-outlet>
  ],
  providers: [
    SimpleLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
