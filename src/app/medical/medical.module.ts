import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalComponent } from './medical.component';
import { SharedModule } from '../shared/shared.module';
import { PracticantesComponent } from './Trabajadores/practicantes/practicantes.component';


@NgModule({
  declarations: [
    MedicalComponent,
    PracticantesComponent,


  ],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    SharedModule
  ]
})
export class MedicalModule { }
