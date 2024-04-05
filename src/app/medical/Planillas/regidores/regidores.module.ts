import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegidoresRoutingModule } from './regidores-routing.module';
import { AddRegidoresComponent } from './add-regidores/add-regidores.component';
import { EditRegidoresComponent } from './edit-regidores/edit-regidores.component';
import { ListRegidoresComponent } from './list-regidores/list-regidores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { RegidoresComponent } from './regidores.component';


@NgModule({
  declarations: [
    AddRegidoresComponent,
    EditRegidoresComponent,
    ListRegidoresComponent,
    RegidoresComponent
  ],
  imports: [
    CommonModule,
    RegidoresRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class RegidoresModule { }
