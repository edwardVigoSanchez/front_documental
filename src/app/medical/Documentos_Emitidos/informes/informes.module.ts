import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { AddInformesComponent } from './add-informes/add-informes.component';
import { EditInformesComponent } from './edit-informes/edit-informes.component';
import { ListInformesComponent } from './list-informes/list-informes.component';
import { InformesComponent } from './informes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddInformesComponent,
    EditInformesComponent,
    ListInformesComponent,
    InformesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class InformesModule { }
