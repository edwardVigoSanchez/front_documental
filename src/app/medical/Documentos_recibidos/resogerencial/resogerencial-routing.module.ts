import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResogerencialComponent } from './resogerencial.component';
import { AddResogerencialComponent } from './add-resogerencial/add-resogerencial.component';
import { ListResogerencialComponent } from './list-resogerencial/list-resogerencial.component';
import { EditResoalcaldiaComponent } from '../resoalcaldia/edit-resoalcaldia/edit-resoalcaldia.component';

const routes: Routes = [{
  path: '',
  component: ResogerencialComponent,
  children: [
    {
      path: 'add-resogerencial',
      component: AddResogerencialComponent
    },
    {
      path: 'list-resogerencial',
      component: ListResogerencialComponent
    },
    {
      path: 'list-resogerencial/edit-resogerencial/:id',
      component: EditResoalcaldiaComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResogerencialRoutingModule { }
