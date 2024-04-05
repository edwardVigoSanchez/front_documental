import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegidoresComponent } from './regidores.component';
import { AddRegidoresComponent } from './add-regidores/add-regidores.component';
import { ListRegidoresComponent } from './list-regidores/list-regidores.component';
import { EditRegidoresComponent } from './edit-regidores/edit-regidores.component';

const routes: Routes = [{
  path: '',
  component: RegidoresComponent,
  children: [
    {
      path: 'add-regidores',
      component: AddRegidoresComponent
    },
    {
      path: 'list-regidores',
      component: ListRegidoresComponent
    },
    {
      path: 'list-regidores/edit-regidores/:id',
      component: EditRegidoresComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegidoresRoutingModule { }
