import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasindeterminadosRoutingModule } from './casindeterminados-routing.module';
import { AddCasindeterminadosComponent } from './add-casindeterminados/add-casindeterminados.component';
import { EditCasindeterminadosComponent } from './edit-casindeterminados/edit-casindeterminados.component';
import { ListCasindeterminadosComponent } from './list-casindeterminados/list-casindeterminados.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CasindeterminadosComponent } from './casindeterminados.component';


@NgModule({
  declarations: [
    AddCasindeterminadosComponent,
    EditCasindeterminadosComponent,
    ListCasindeterminadosComponent,
    CasindeterminadosComponent
  ],
  imports: [
    CommonModule,
    CasindeterminadosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CasindeterminadosModule { }
