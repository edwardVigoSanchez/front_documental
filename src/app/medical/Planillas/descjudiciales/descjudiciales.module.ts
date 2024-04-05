import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescjudicialesRoutingModule } from './descjudiciales-routing.module';
import { AddDescjudicialesComponent } from './add-descjudiciales/add-descjudiciales.component';
import { EditDescjudicialesComponent } from './edit-descjudiciales/edit-descjudiciales.component';
import { ListDescjudicialesComponent } from './list-descjudiciales/list-descjudiciales.component';
import { DescjudicialesComponent } from './descjudiciales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddDescjudicialesComponent,
    EditDescjudicialesComponent,
    ListDescjudicialesComponent,
    DescjudicialesComponent
  ],
  imports: [
    CommonModule,
    DescjudicialesRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class DescjudicialesModule { }
