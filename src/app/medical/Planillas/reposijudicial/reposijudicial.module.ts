import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposijudicialRoutingModule } from './reposijudicial-routing.module';
import { AddReposijudicialComponent } from './add-reposijudicial/add-reposijudicial.component';
import { EditReposijudicialComponent } from './edit-reposijudicial/edit-reposijudicial.component';
import { ListReposijudicialComponent } from './list-reposijudicial/list-reposijudicial.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ReposijudicialComponent } from './reposijudicial.component';


@NgModule({
  declarations: [
    AddReposijudicialComponent,
    EditReposijudicialComponent,
    ListReposijudicialComponent,
    ReposijudicialComponent
  ],
  imports: [
    CommonModule,
    ReposijudicialRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class ReposijudicialModule { }
