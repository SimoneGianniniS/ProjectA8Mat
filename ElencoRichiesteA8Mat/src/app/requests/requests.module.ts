import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { AddRequestComponent } from './add-request/add-request.component';


@NgModule({
  declarations: [RequestListComponent, AddRequestComponent],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
