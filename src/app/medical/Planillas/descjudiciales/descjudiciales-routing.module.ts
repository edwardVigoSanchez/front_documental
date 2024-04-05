import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescjudicialesComponent } from './descjudiciales.component';
import { AddDescjudicialesComponent } from './add-descjudiciales/add-descjudiciales.component';
import { ListDescjudicialesComponent } from './list-descjudiciales/list-descjudiciales.component';
import { EditDescjudicialesComponent } from './edit-descjudiciales/edit-descjudiciales.component';

const routes: Routes = [{
  path: '',
  component: DescjudicialesComponent,
  children: [
    {
      path: 'add-descjudiciales',
      component: AddDescjudicialesComponent
    },
    {
      path: 'list-descjudiciales',
      component: ListDescjudicialesComponent
    },
    {
      path: 'list-descjudiciales/edit-descjudiciales/:id',
      component: EditDescjudicialesComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescjudicialesRoutingModule { }
