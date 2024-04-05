import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExfuncionariosComponent } from './exfuncionarios.component';
import { AddExfuncionariosComponent } from './add-exfuncionarios/add-exfuncionarios.component';
import { ListExfuncionariosComponent } from './list-exfuncionarios/list-exfuncionarios.component';
import { AditExfuncionariosComponent } from './adit-exfuncionarios/adit-exfuncionarios.component';

const routes: Routes = [{
  path: '',
  component: ExfuncionariosComponent,
  children: [
    {
      path: 'add-exfuncionarios',
      component: AddExfuncionariosComponent
    },
    {
      path: 'list-exfuncionarios',
      component: ListExfuncionariosComponent
    },
    {
      path: 'list-exfuncionarios/edit-exfuncionarios/:id',
      component: AditExfuncionariosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExfuncionariosRoutingModule { }
