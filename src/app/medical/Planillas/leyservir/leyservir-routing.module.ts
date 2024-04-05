import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeyservirComponent } from './leyservir.component';
import { AddLeyservirComponent } from './add-leyservir/add-leyservir.component';
import { ListLeyservirComponent } from './list-leyservir/list-leyservir.component';
import { EditLeyservirComponent } from './edit-leyservir/edit-leyservir.component';

const routes: Routes = [{
  path: '',
  component: LeyservirComponent,
  children: [
    {
      path: 'add-leyservir',
      component: AddLeyservirComponent
    },
    {
      path: 'list-leyservir',
      component: ListLeyservirComponent
    },
    {
      path: 'list-leyservir/edit-leyservir/:id',
      component: EditLeyservirComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeyservirRoutingModule { }
