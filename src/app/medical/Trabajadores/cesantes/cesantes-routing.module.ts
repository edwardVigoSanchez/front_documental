import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesantesComponent } from './cesantes.component';
import { AddCesanteComponent } from './add-cesante/add-cesante.component';
import { ListCesanteComponent } from './list-cesante/list-cesante.component';
import { EditCesanteComponent } from './edit-cesante/edit-cesante.component';

const routes: Routes = [{
  path: '',
  component: CesantesComponent,
  children: [
    {
      path: 'add-cesante',
      component: AddCesanteComponent
    },
    {
      path: 'list-cesante',
      component: ListCesanteComponent
    },
    {
      path: 'list-cesante/edit-cesante/:id',
      component: EditCesanteComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CesantesRoutingModule { }
