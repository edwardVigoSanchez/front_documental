import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticantesComponent } from './practicantes.component';
import { AddPracticantesComponent } from './add-practicantes/add-practicantes.component';
import { ListPracticantesComponent } from './list-practicantes/list-practicantes.component';
import { EditPracticantesComponent } from './edit-practicantes/edit-practicantes.component';

const routes: Routes = [{
  path: '',
  component: PracticantesComponent,
  children: [
    {
      path: 'add-practicantes',
      component: AddPracticantesComponent
    },
    {
      path: 'list-practicantes',
      component: ListPracticantesComponent
    },
    {
      path: 'list-practicantes/edit-practicantes/:id',
      component: EditPracticantesComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticantesRoutingModule { }
