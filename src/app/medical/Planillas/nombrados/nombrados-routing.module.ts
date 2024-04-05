import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombradosComponent } from './nombrados.component';
import { AddNombradosComponent } from './add-nombrados/add-nombrados.component';
import { ListNombradosComponent } from './list-nombrados/list-nombrados.component';
import { EditNombradosComponent } from './edit-nombrados/edit-nombrados.component';

const routes: Routes = [{
  path: '',
  component: NombradosComponent,
  children: [
    {
      path: 'add-nombrados',
      component: AddNombradosComponent
    },
    {
      path: 'list-nombrados',
      component: ListNombradosComponent
    },
    {
      path: 'list-nombrados/edit-nombrados/:id',
      component: EditNombradosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NombradosRoutingModule { }
