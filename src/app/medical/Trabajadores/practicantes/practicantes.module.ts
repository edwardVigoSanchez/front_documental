import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticantesRoutingModule } from './practicantes-routing.module';
import { AddPracticantesComponent } from './add-practicantes/add-practicantes.component';
import { EditPracticantesComponent } from './edit-practicantes/edit-practicantes.component';
import { ListPracticantesComponent } from './list-practicantes/list-practicantes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddPracticantesComponent,
    EditPracticantesComponent,
    ListPracticantesComponent,
    
  ],
  imports: [
    CommonModule,
    PracticantesRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class PracticantesModule { }
