import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermanentesbComponent } from './permanentesb.component';
import { AddPermanentesbComponent } from './add-permanentesb/add-permanentesb.component';
import { ListPermanentesbComponent } from './list-permanentesb/list-permanentesb.component';
import { EditPermanentesbComponent } from './edit-permanentesb/edit-permanentesb.component';

const routes: Routes = [{
  path: '',
  component: PermanentesbComponent,
  children: [
    {
      path: 'add-permanentesb',
      component: AddPermanentesbComponent
    },
    {
      path: 'list-permanentesb',
      component: ListPermanentesbComponent
    },
    {
      path: 'list-permanentesb/edit-permanentesb/:id',
      component: EditPermanentesbComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermanentesbRoutingModule { }
