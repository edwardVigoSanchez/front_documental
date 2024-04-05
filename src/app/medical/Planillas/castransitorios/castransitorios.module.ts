import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CastransitoriosRoutingModule } from './castransitorios-routing.module';
import { AddCastransitoriosComponent } from './add-castransitorios/add-castransitorios.component';
import { EditCastransitoriosComponent } from './edit-castransitorios/edit-castransitorios.component';
import { ListCastransitoriosComponent } from './list-castransitorios/list-castransitorios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CastransitoriosComponent } from './castransitorios.component';


@NgModule({
  declarations: [
    AddCastransitoriosComponent,
    EditCastransitoriosComponent,
    ListCastransitoriosComponent,
    CastransitoriosComponent
  ],
  imports: [
    CommonModule,
    CastransitoriosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CastransitoriosModule { }
