import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemorandumeRoutingModule } from './memorandume-routing.module';
import { AddMemorandumeComponent } from './add-memorandume/add-memorandume.component';
import { EditMemorandumeComponent } from './edit-memorandume/edit-memorandume.component';
import { ListMemorandumeComponent } from './list-memorandume/list-memorandume.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { MemorandumeComponent } from './memorandume.component';


@NgModule({
  declarations: [
    AddMemorandumeComponent,
    EditMemorandumeComponent,
    ListMemorandumeComponent,
    MemorandumeComponent
  ],
  imports: [
    CommonModule,
    MemorandumeRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
  ]
})
export class MemorandumeModule { }
