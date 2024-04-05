import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { AddStaffNComponent } from './add-staff-n/add-staff-n.component';
import { EditStaffNComponent } from './edit-staff-n/edit-staff-n.component';
import { ListStaffNComponent } from './list-staff-n/list-staff-n.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    StaffComponent,
    AddStaffNComponent,
    EditStaffNComponent,
    ListStaffNComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    // 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatDatepickerModule,
    SharedModule,
    MatIconModule
    
  ]
})
export class StaffModule { }
