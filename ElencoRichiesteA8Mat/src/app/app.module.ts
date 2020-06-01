import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsModule } from './requests/requests.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { AddRequestComponent } from './requests/add-request/add-request.component';

@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    RequestsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
