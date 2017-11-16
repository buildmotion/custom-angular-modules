import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { SimpleLoggerModule, SimpleLoggerService } from 'custom-angular-modules';

import { AppComponent } from './app.component';
import { ColtraneComponent } from './coltrane/coltrane.component';
import { SanbornComponent } from './sanborn/sanborn.component';
import { GroverComponent } from './grover/grover.component';

@NgModule({
  declarations: [
    AppComponent,
    ColtraneComponent,
    SanbornComponent,
    GroverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // SimpleLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
