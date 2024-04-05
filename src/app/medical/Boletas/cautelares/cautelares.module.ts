import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CautelaresRoutingModule } from './cautelares-routing.module';
import { AddCautelaresComponent } from './add-cautelares/add-cautelares.component';
import { EditCautelaresComponent } from './edit-cautelares/edit-cautelares.component';
import { ListCautelaresComponent } from './list-cautelares/list-cautelares.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CautelaresComponent } from './cautelares.component';


@NgModule({
  declarations: [
    AddCautelaresComponent,
    EditCautelaresComponent,
    ListCautelaresComponent,
    CautelaresComponent
  ],
  imports: [
    CommonModule,
    CautelaresRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CautelaresModule { }
