import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OficiosComponent } from './oficios.component';
import { AddOficiosComponent } from './add-oficios/add-oficios.component';
import { ListOficiosComponent } from './list-oficios/list-oficios.component';
import { EditOficiosComponent } from './edit-oficios/edit-oficios.component';

const routes: Routes = [{
  path: '',
  component: OficiosComponent,
  children: [
    {
      path: 'add-oficios',
      component: AddOficiosComponent
    },
    {
      path: 'list-oficios',
      component: ListOficiosComponent
    },
    {
      path: 'list-oficios/edit-oficios/:id',
      component: EditOficiosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OficiosRoutingModule { }
