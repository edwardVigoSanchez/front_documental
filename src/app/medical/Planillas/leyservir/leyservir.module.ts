import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeyservirRoutingModule } from './leyservir-routing.module';
import { AddLeyservirComponent } from './add-leyservir/add-leyservir.component';
import { EditLeyservirComponent } from './edit-leyservir/edit-leyservir.component';
import { ListLeyservirComponent } from './list-leyservir/list-leyservir.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { LeyservirComponent } from './leyservir.component';


@NgModule({
  declarations: [
    AddLeyservirComponent,
    EditLeyservirComponent,
    ListLeyservirComponent,
    LeyservirComponent
  ],
  imports: [
    CommonModule,
    LeyservirRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class LeyservirModule { }
