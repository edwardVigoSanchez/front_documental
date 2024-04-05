import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OficiosRoutingModule } from './oficios-routing.module';
import { AddOficiosComponent } from './add-oficios/add-oficios.component';
import { EditOficiosComponent } from './edit-oficios/edit-oficios.component';
import { ListOficiosComponent } from './list-oficios/list-oficios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { OficiosComponent } from './oficios.component';


@NgModule({
  declarations: [
    AddOficiosComponent,
    EditOficiosComponent,
    ListOficiosComponent,
    OficiosComponent
  ],
  imports: [
    CommonModule,
    OficiosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  
  ]
})
export class OficiosModule { }
