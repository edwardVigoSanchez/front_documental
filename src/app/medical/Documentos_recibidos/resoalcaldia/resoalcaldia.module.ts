import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResoalcaldiaRoutingModule } from './resoalcaldia-routing.module';
import { AddResoalcaldiaComponent } from './add-resoalcaldia/add-resoalcaldia.component';
import { EditResoalcaldiaComponent } from './edit-resoalcaldia/edit-resoalcaldia.component';
import { ListResoalcaldiaComponent } from './list-resoalcaldia/list-resoalcaldia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ResoalcaldiaComponent } from './resoalcaldia.component';


@NgModule({
  declarations: [
    AddResoalcaldiaComponent,
    EditResoalcaldiaComponent,
    ListResoalcaldiaComponent,
    ResoalcaldiaComponent
  ],
  imports: [
    CommonModule,
    ResoalcaldiaRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,

  ]
})
export class ResoalcaldiaModule { }
