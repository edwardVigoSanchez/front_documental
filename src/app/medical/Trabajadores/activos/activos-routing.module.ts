import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivosComponent } from './activos.component';
import { AddActivosComponent } from './add-activos/add-activos.component';
import { ListActivosComponent } from './list-activos/list-activos.component';
import { AditActivosComponent } from './adit-activos/adit-activos.component';

const routes: Routes = [{
  path: '',
  component: ActivosComponent,
  children: [
    {
      path: 'add-activos',
      component: AddActivosComponent
    },
    {
      path: 'list-activos',
      component: ListActivosComponent
    },
    {
      path: 'list-activos/edit-activos/:id',
      component: AditActivosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivosRoutingModule { }
