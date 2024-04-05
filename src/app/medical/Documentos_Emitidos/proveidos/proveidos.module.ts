import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveidosRoutingModule } from './proveidos-routing.module';
import { AddProveidosComponent } from './add-proveidos/add-proveidos.component';
import { EditProveidosComponent } from './edit-proveidos/edit-proveidos.component';
import { ListProveidosComponent } from './list-proveidos/list-proveidos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ProveidosComponent } from './proveidos.component';


@NgModule({
  declarations: [
    AddProveidosComponent,
    EditProveidosComponent,
    ListProveidosComponent,
    ProveidosComponent
  ],
  imports: [
    CommonModule,
    ProveidosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,

  ]
})
export class ProveidosModule { }
