import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { MatTableModule, MatButtonModule, MatIconModule, MatSortModule, MatDividerModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [RequestListComponent, AddRequestComponent],
  entryComponents: [AddRequestComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RequestsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule ,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDividerModule
  ]
})
export class RequestsModule { }
