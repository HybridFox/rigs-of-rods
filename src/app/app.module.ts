import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import * as icons from 'angular-feather/icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Pages } from './pages';

@NgModule({
  declarations: [
    AppComponent,

    Pages
  ],
  imports: [
    FeatherModule.pick(icons),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
