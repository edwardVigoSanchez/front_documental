import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalafonariosComponent } from './escalafonarios.component';
import { AddEscalafonariosComponent } from './add-escalafonarios/add-escalafonarios.component';
import { ListEscalafonariosComponent } from './list-escalafonarios/list-escalafonarios.component';
import { EditEscalafonariosComponent } from './edit-escalafonarios/edit-escalafonarios.component';

const routes: Routes = [{
  path: '',
  component: EscalafonariosComponent,
  children: [
    {
      path: 'add-escalafonarios',
      component: AddEscalafonariosComponent
    },
    {
      path: 'list-escalafonarios',
      component: ListEscalafonariosComponent
    },
    {
      path: 'list-escalafonarios/edit-escalafonarios/:id',
      component: EditEscalafonariosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalafonariosRoutingModule { }
