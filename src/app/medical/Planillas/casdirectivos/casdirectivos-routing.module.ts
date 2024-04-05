import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasdirectivosComponent } from './casdirectivos.component';
import { AddCasdirectivosComponent } from './add-casdirectivos/add-casdirectivos.component';
import { ListCasdirectivosComponent } from './list-casdirectivos/list-casdirectivos.component';
import { EditCasdirectivosComponent } from './edit-casdirectivos/edit-casdirectivos.component';

const routes: Routes = [{
  path: '',
  component: CasdirectivosComponent ,
  children: [
    {
      path: 'add-casdirectivos',
      component: AddCasdirectivosComponent
    },
    {
      path: 'list-casdirectivos',
      component: ListCasdirectivosComponent
    },
    {
      path: 'list-casdirectivos/edit-casdirectivos/:id',
      component: EditCasdirectivosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasdirectivosRoutingModule { }
