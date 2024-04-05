import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartasRoutingModule } from './cartas-routing.module';
import { AddCartasComponent } from './add-cartas/add-cartas.component';
import { EditCartasComponent } from './edit-cartas/edit-cartas.component';
import { ListCartasComponent } from './list-cartas/list-cartas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CartasComponent } from './cartas.component';


@NgModule({
  declarations: [
    AddCartasComponent,
    EditCartasComponent,
    ListCartasComponent,
    CartasComponent
  ],
  imports: [
    CommonModule,
    CartasRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CartasModule { }
