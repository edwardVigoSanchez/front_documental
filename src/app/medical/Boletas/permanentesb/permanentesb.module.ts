import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermanentesbRoutingModule } from './permanentesb-routing.module';
import { AddPermanentesbComponent } from './add-permanentesb/add-permanentesb.component';
import { EditPermanentesbComponent } from './edit-permanentesb/edit-permanentesb.component';
import { ListPermanentesbComponent } from './list-permanentesb/list-permanentesb.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { PermanentesbComponent } from './permanentesb.component';


@NgModule({
  declarations: [
    AddPermanentesbComponent,
    EditPermanentesbComponent,
    ListPermanentesbComponent,
    PermanentesbComponent
  ],
  imports: [
    CommonModule,
    PermanentesbRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  
  ]
})
export class PermanentesbModule { }
