import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorandumComponent } from './memorandum.component';
import { AddMemorandumComponent } from './add-memorandum/add-memorandum.component';
import { ListMemorandumComponent } from './list-memorandum/list-memorandum.component';
import { EditMemorandumComponent } from './edit-memorandum/edit-memorandum.component';

const routes: Routes = [{
  path: '',
  component: MemorandumComponent,
  children: [
    {
      path: 'add-memorandum',
      component: AddMemorandumComponent
    },
    {
      path: 'list-memorandum',
      component: ListMemorandumComponent
    },
    {
      path: 'list-memorandum/edit-memorandum/:id',
      component: EditMemorandumComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemorandumRoutingModule { }
