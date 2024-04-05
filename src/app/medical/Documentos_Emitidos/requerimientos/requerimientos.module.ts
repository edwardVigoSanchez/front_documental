import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequerimientosRoutingModule } from './requerimientos-routing.module';
import { AddRequerimientosComponent } from './add-requerimientos/add-requerimientos.component';
import { EditRequerimientosComponent } from './edit-requerimientos/edit-requerimientos.component';
import { ListRequerimientosComponent } from './list-requerimientos/list-requerimientos.component';
import { RequerimientosComponent } from './requerimientos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddRequerimientosComponent,
    EditRequerimientosComponent,
    ListRequerimientosComponent,
    RequerimientosComponent
  ],
  imports: [
    CommonModule,
    RequerimientosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class RequerimientosModule { }
