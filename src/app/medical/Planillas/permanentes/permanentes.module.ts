import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermanentesRoutingModule } from './permanentes-routing.module';
import { AddPermanentesComponent } from './add-permanentes/add-permanentes.component';
import { EditPermanentesComponent } from './edit-permanentes/edit-permanentes.component';
import { ListPermanentesComponent } from './list-permanentes/list-permanentes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { PermanentesComponent } from './permanentes.component';


@NgModule({
  declarations: [
    AddPermanentesComponent,
    EditPermanentesComponent,
    ListPermanentesComponent,
    PermanentesComponent
  ],
  imports: [
    CommonModule,
    PermanentesRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class PermanentesModule { }
