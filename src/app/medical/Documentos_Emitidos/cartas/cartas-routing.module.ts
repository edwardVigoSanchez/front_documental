import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasComponent } from './cartas.component';
import { AddCartasComponent } from './add-cartas/add-cartas.component';
import { ListCartasComponent } from './list-cartas/list-cartas.component';
import { EditCartasComponent } from './edit-cartas/edit-cartas.component';

const routes: Routes = [{
  path: '',
  component: CartasComponent,
  children: [
    {
      path: 'add-cartas',
      component: AddCartasComponent
    },
    {
      path: 'list-cartas',
      component: ListCartasComponent
    },
    {
      path: 'list-cartas/edit-cartas/:id',
      component: EditCartasComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartasRoutingModule { }
