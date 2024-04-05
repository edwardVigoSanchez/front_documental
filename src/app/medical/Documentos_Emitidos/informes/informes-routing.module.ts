import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformesComponent } from './informes.component';
import { AddInformesComponent } from './add-informes/add-informes.component';
import { ListInformesComponent } from './list-informes/list-informes.component';
import { EditInformesComponent } from './edit-informes/edit-informes.component';

const routes: Routes = [{
  path: '',
  component: InformesComponent,
  children: [
    {
      path: 'add-informes',
      component: AddInformesComponent
    },
    {
      path: 'list-informes',
      component: ListInformesComponent
    },
    {
      path: 'list-informes/edit-informes/:id',
      component: EditInformesComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformesRoutingModule { }
