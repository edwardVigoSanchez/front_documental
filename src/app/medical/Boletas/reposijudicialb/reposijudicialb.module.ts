import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposijudicialbRoutingModule } from './reposijudicialb-routing.module';
import { AddReposijudicialbComponent } from './add-reposijudicialb/add-reposijudicialb.component';
import { EditReposijudicialbComponent } from './edit-reposijudicialb/edit-reposijudicialb.component';
import { ListReposijudicialbComponent } from './list-reposijudicialb/list-reposijudicialb.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ReposijudicialbComponent } from './reposijudicialb.component';


@NgModule({
  declarations: [
    AddReposijudicialbComponent,
    EditReposijudicialbComponent,
    ListReposijudicialbComponent,
    ReposijudicialbComponent
  ],
  imports: [
    CommonModule,
    ReposijudicialbRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class ReposijudicialbModule { }
