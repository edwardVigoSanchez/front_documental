import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CesantesRoutingModule } from './cesantes-routing.module';
import { EditCesanteComponent } from './edit-cesante/edit-cesante.component';
import { AddCesanteComponent } from './add-cesante/add-cesante.component';
import { ListCesanteComponent } from './list-cesante/list-cesante.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from '../../../shared/shared.module';
import { CesantesComponent } from './cesantes.component';

@NgModule({
  declarations: [
    EditCesanteComponent,
    AddCesanteComponent,
    ListCesanteComponent,
    CesantesComponent
  ],
  imports: [
    CommonModule,
    CesantesRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CesantesModule { }
