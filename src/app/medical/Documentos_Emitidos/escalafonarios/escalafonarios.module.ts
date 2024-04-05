import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscalafonariosRoutingModule } from './escalafonarios-routing.module';
import { AddEscalafonariosComponent } from './add-escalafonarios/add-escalafonarios.component';
import { EditEscalafonariosComponent } from './edit-escalafonarios/edit-escalafonarios.component';
import { ListEscalafonariosComponent } from './list-escalafonarios/list-escalafonarios.component';
import { EscalafonariosComponent } from './escalafonarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    AddEscalafonariosComponent,
    EditEscalafonariosComponent,
    ListEscalafonariosComponent,
    EscalafonariosComponent
  ],
  imports: [
    CommonModule,
    EscalafonariosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class EscalafonariosModule { }
