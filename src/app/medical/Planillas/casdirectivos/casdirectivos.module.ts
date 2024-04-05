import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasdirectivosRoutingModule } from './casdirectivos-routing.module';
import { AddCasdirectivosComponent } from './add-casdirectivos/add-casdirectivos.component';
import { EditCasdirectivosComponent } from './edit-casdirectivos/edit-casdirectivos.component';
import { ListCasdirectivosComponent } from './list-casdirectivos/list-casdirectivos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CasdirectivosComponent } from './casdirectivos.component';


@NgModule({
  declarations: [
    AddCasdirectivosComponent,
    EditCasdirectivosComponent,
    ListCasdirectivosComponent,
    CasdirectivosComponent
    
  ],
  imports: [
    CommonModule,
    CasdirectivosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CasdirectivosModule { }
