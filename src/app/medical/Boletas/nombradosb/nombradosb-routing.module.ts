import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NombradosbComponent } from './nombradosb.component';
import { AddNombradosbComponent } from './add-nombradosb/add-nombradosb.component';
import { ListNombradosbComponent } from './list-nombradosb/list-nombradosb.component';
import { EditNombradosbComponent } from './edit-nombradosb/edit-nombradosb.component';

const routes: Routes = [{
  path: '',
  component: NombradosbComponent,
  children: [
    {
      path: 'add-nombradosb',
      component: AddNombradosbComponent
    },
    {
      path: 'list-nombradosb',
      component: ListNombradosbComponent
    },
    {
      path: 'list-nombradosb/edit-nombradosb/:id',
      component: EditNombradosbComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NombradosbRoutingModule { }
