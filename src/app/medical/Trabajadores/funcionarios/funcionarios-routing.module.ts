import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios.component';
import { AddFuncionariosComponent } from './add-funcionarios/add-funcionarios.component';
import { ListFuncionariosComponent } from './list-funcionarios/list-funcionarios.component';
import { AditFuncionariosComponent } from './adit-funcionarios/adit-funcionarios.component';

const routes: Routes = [{
  path: '',
  component: FuncionariosComponent,
  children: [
    {
      path: 'add-funcionarios',
      component: AddFuncionariosComponent
    },
    {
      path: 'list-funcionarios',
      component: ListFuncionariosComponent
    },
    {
      path: 'list-funcionarios/edit-funcionarios/:id',
      component: AditFuncionariosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
