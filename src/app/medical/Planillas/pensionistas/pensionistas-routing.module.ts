import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensionistasComponent } from './pensionistas.component';
import { AddPensionistasComponent } from './add-pensionistas/add-pensionistas.component';
import { ListPensionistasComponent } from './list-pensionistas/list-pensionistas.component';
import { EditPensionistasComponent } from './edit-pensionistas/edit-pensionistas.component';

const routes: Routes = [{
  path: '',
  component: PensionistasComponent ,
  children: [
    {
      path: 'add-pensionistas',
      component: AddPensionistasComponent
    },
    {
      path: 'list-pensionistas',
      component: ListPensionistasComponent
    },
    {
      path: 'list-pensionistas/edit-pensionistas/:id',
      component: EditPensionistasComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PensionistasRoutingModule { }
