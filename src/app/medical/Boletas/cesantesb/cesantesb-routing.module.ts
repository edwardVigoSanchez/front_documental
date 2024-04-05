import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CesantesbComponent } from './cesantesb.component';
import { AddCesantesbComponent } from './add-cesantesb/add-cesantesb.component';
import { ListCesantesbComponent } from './list-cesantesb/list-cesantesb.component';
import { EditCesantesbComponent } from './edit-cesantesb/edit-cesantesb.component';

const routes: Routes = [{
  path: '',
  component: CesantesbComponent,
  children: [
    {
      path: 'add-cesantesb',
      component: AddCesantesbComponent
    },
    {
      path: 'list-cesantesb',
      component: ListCesantesbComponent
    },
    {
      path: 'list-cesantesb/edit-cesantesb/:id',
      component: EditCesantesbComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CesantesbRoutingModule { }
