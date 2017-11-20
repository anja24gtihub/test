import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import * as $ from 'jquery';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { RecipepuppyService } from './services/recipepuppy.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [ RecipepuppyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
