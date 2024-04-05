import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermanentesComponent } from './permanentes.component';
import { AddPermanentesComponent } from './add-permanentes/add-permanentes.component';
import { ListPermanentesComponent } from './list-permanentes/list-permanentes.component';
import { EditPermanentesComponent } from './edit-permanentes/edit-permanentes.component';

const routes: Routes = [{
  path: '',
  component: PermanentesComponent ,
  children: [
    {
      path: 'add-permanentes',
      component: AddPermanentesComponent
    },
    {
      path: 'list-permanentes',
      component: ListPermanentesComponent
    },
    {
      path: 'list-permanentes/edit-permanentes/:id',
      component: EditPermanentesComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermanentesRoutingModule { }
