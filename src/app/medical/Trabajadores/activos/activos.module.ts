import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivosRoutingModule } from './activos-routing.module';
import { AddActivosComponent } from './add-activos/add-activos.component';
import { AditActivosComponent } from './adit-activos/adit-activos.component';
import { ListActivosComponent } from './list-activos/list-activos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ActivosComponent } from './activos.component';


@NgModule({
  declarations: [
    AddActivosComponent,
    AditActivosComponent,
    ListActivosComponent,
    ActivosComponent
  ],
  imports: [
    CommonModule,
    ActivosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class ActivosModule { }
