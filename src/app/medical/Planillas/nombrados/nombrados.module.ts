import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NombradosRoutingModule } from './nombrados-routing.module';
import { AddNombradosComponent } from './add-nombrados/add-nombrados.component';
import { EditNombradosComponent } from './edit-nombrados/edit-nombrados.component';
import { ListNombradosComponent } from './list-nombrados/list-nombrados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NombradosComponent } from './nombrados.component';


@NgModule({
  declarations: [
    AddNombradosComponent,
    EditNombradosComponent,
    ListNombradosComponent,
    NombradosComponent
  ],
  imports: [
    CommonModule,
    NombradosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class NombradosModule { }
