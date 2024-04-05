import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorandumeComponent } from './memorandume.component';
import { AddMemorandumeComponent } from './add-memorandume/add-memorandume.component';
import { ListMemorandumeComponent } from './list-memorandume/list-memorandume.component';
import { EditMemorandumComponent } from '../../Documentos_recibidos/memorandum/edit-memorandum/edit-memorandum.component';

const routes: Routes = [{
  path: '',
  component: MemorandumeComponent,
  children: [
    {
      path: 'add-memorandume',
      component: AddMemorandumeComponent
    },
    {
      path: 'list-memorandume',
      component: ListMemorandumeComponent
    },
    {
      path: 'list-memorandume/edit-memorandume/:id',
      component: EditMemorandumComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemorandumeRoutingModule { }
