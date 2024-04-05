import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasindeterminadosComponent } from './casindeterminados.component';
import { AddCasindeterminadosComponent } from './add-casindeterminados/add-casindeterminados.component';
import { ListCasindeterminadosComponent } from './list-casindeterminados/list-casindeterminados.component';
import { EditCasindeterminadosComponent } from './edit-casindeterminados/edit-casindeterminados.component';

const routes: Routes = [{
  path: '',
  component: CasindeterminadosComponent,
  children: [
    {
      path: 'add-casindeterminados',
      component: AddCasindeterminadosComponent
    },
    {
      path: 'list-casindeterminados',
      component: ListCasindeterminadosComponent
    },
    {
      path: 'list-casindeterminados/edit-casindeterminados/:id',
      component: EditCasindeterminadosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasindeterminadosRoutingModule { }
