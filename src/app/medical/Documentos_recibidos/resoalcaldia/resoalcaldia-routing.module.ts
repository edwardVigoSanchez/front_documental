import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResoalcaldiaComponent } from './resoalcaldia.component';
import { AddResoalcaldiaComponent } from './add-resoalcaldia/add-resoalcaldia.component';
import { ListResoalcaldiaComponent } from './list-resoalcaldia/list-resoalcaldia.component';
import { EditResoalcaldiaComponent } from './edit-resoalcaldia/edit-resoalcaldia.component';

const routes: Routes = [{
  path: '',
  component: ResoalcaldiaComponent,
  children: [
    {
      path: 'add-resoalcaldia',
      component: AddResoalcaldiaComponent
    },
    {
      path: 'list-resoalcaldia',
      component: ListResoalcaldiaComponent
    },
    {
      path: 'list-resoalcaldia/edit-resoalcaldia/:id',
      component: EditResoalcaldiaComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResoalcaldiaRoutingModule { }
