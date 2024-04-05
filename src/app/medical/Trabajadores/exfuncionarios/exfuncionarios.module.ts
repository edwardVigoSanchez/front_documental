import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExfuncionariosRoutingModule } from './exfuncionarios-routing.module';
import { AddExfuncionariosComponent } from './add-exfuncionarios/add-exfuncionarios.component';
import { AditExfuncionariosComponent } from './adit-exfuncionarios/adit-exfuncionarios.component';
import { ListExfuncionariosComponent } from './list-exfuncionarios/list-exfuncionarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ExfuncionariosComponent } from './exfuncionarios.component';


@NgModule({
  declarations: [
    AddExfuncionariosComponent,
    AditExfuncionariosComponent,
    ListExfuncionariosComponent,
    ExfuncionariosComponent
  ],
  imports: [
    CommonModule,
    ExfuncionariosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class ExfuncionariosModule { }
