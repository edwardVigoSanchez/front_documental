import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { AddFuncionariosComponent } from './add-funcionarios/add-funcionarios.component';
import { AditFuncionariosComponent } from './adit-funcionarios/adit-funcionarios.component';
import { ListFuncionariosComponent } from './list-funcionarios/list-funcionarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { FuncionariosComponent } from './funcionarios.component';

@NgModule({
  declarations: [
    AddFuncionariosComponent,
    AditFuncionariosComponent,
    ListFuncionariosComponent,
    FuncionariosComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class FuncionariosModule { }
