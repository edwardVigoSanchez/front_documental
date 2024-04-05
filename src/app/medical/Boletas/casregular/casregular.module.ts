import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasregularRoutingModule } from './casregular-routing.module';
import { AddCasregularComponent } from './add-casregular/add-casregular.component';
import { EditCasregularComponent } from './edit-casregular/edit-casregular.component';
import { ListCasregularComponent } from './list-casregular/list-casregular.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CasregularComponent } from './casregular.component';


@NgModule({
  declarations: [
    AddCasregularComponent,
    EditCasregularComponent,
    ListCasregularComponent,
    CasregularComponent
  ],
  imports: [
    CommonModule,
    CasregularRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class CasregularModule { }
