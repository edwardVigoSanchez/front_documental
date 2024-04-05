import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocdiversosComponent } from './docdiversos.component';
import { AddDocdiversosComponent } from './add-docdiversos/add-docdiversos.component';
import { ListDocdiversosComponent } from './list-docdiversos/list-docdiversos.component';
import { EditDocdiversosComponent } from './edit-docdiversos/edit-docdiversos.component';

const routes: Routes = [{
  path: '',
  component: DocdiversosComponent,
  children: [
    {
      path: 'add-docdiversos',
      component: AddDocdiversosComponent
    },
    {
      path: 'list-docdiversos',
      component: ListDocdiversosComponent
    },
    {
      path: 'list-docdiversos/edit-docdiversos/:id',
      component: EditDocdiversosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocdiversosRoutingModule { }
