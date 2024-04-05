import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PensionistasRoutingModule } from './pensionistas-routing.module';
import { AddPensionistasComponent } from './add-pensionistas/add-pensionistas.component';
import { EditPensionistasComponent } from './edit-pensionistas/edit-pensionistas.component';
import { ListPensionistasComponent } from './list-pensionistas/list-pensionistas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { PensionistasComponent } from './pensionistas.component';


@NgModule({
  declarations: [
    AddPensionistasComponent,
    EditPensionistasComponent,
    ListPensionistasComponent,
    PensionistasComponent
  ],
  imports: [
    CommonModule,
    PensionistasRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class PensionistasModule { }
