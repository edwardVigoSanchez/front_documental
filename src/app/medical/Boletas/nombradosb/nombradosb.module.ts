import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NombradosbRoutingModule } from './nombradosb-routing.module';
import { AddNombradosbComponent } from './add-nombradosb/add-nombradosb.component';
import { EditNombradosbComponent } from './edit-nombradosb/edit-nombradosb.component';
import { ListNombradosbComponent } from './list-nombradosb/list-nombradosb.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NombradosbComponent } from './nombradosb.component';


@NgModule({
  declarations: [
    AddNombradosbComponent,
    EditNombradosbComponent,
    ListNombradosbComponent,
    NombradosbComponent
  ],
  imports: [
    CommonModule,
    NombradosbRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class NombradosbModule { }
