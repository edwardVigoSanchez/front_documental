import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CesantesbRoutingModule } from './cesantesb-routing.module';
import { AddCesantesbComponent } from './add-cesantesb/add-cesantesb.component';
import { EditCesantesbComponent } from './edit-cesantesb/edit-cesantesb.component';
import { ListCesantesbComponent } from './list-cesantesb/list-cesantesb.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CesantesbComponent } from './cesantesb.component';


@NgModule({
  declarations: [
    AddCesantesbComponent,
    EditCesantesbComponent,
    ListCesantesbComponent,
    CesantesbComponent
  ],
  imports: [
    CommonModule,
    CesantesbRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CesantesbModule { }
