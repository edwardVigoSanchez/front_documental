import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequerimientosComponent } from './requerimientos.component';
import { AddRequerimientosComponent } from './add-requerimientos/add-requerimientos.component';
import { ListRequerimientosComponent } from './list-requerimientos/list-requerimientos.component';
import { EditRequerimientosComponent } from './edit-requerimientos/edit-requerimientos.component';

const routes: Routes = [{
  path: '',
  component: RequerimientosComponent,
  children: [
    {
      path: 'add-requerimientos',
      component: AddRequerimientosComponent
    },
    {
      path: 'list-requerimientos',
      component: ListRequerimientosComponent
    },
    {
      path: 'list-requerimientos/edit-requerimientos/:id',
      component: EditRequerimientosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequerimientosRoutingModule { }
