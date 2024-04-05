import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveidosComponent } from './proveidos.component';
import { AddProveidosComponent } from './add-proveidos/add-proveidos.component';
import { ListProveidosComponent } from './list-proveidos/list-proveidos.component';
import { EditProveidosComponent } from './edit-proveidos/edit-proveidos.component';

const routes: Routes = [{
  path: '',
  component: ProveidosComponent,
  children: [
    {
      path: 'add-proveidos',
      component: AddProveidosComponent
    },
    {
      path: 'list-proveidos',
      component: ListProveidosComponent
    },
    {
      path: 'list-proveidos/edit-proveidos/:id',
      component: EditProveidosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveidosRoutingModule { }
