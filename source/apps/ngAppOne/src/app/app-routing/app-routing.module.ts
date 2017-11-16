import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './../app.component';
import { ColtraneComponent } from './../coltrane/coltrane.component';
import { SanbornComponent } from './../sanborn/sanborn.component';
import { GroverComponent } from './../grover/grover.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'coltrane', component: ColtraneComponent },
  { path: 'sanborn', component: SanbornComponent },
  { path: 'grover', component: GroverComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
