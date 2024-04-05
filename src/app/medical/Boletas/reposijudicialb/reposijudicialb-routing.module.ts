import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposijudicialbComponent } from './reposijudicialb.component';
import { AddReposijudicialbComponent } from './add-reposijudicialb/add-reposijudicialb.component';
import { ListReposijudicialbComponent } from './list-reposijudicialb/list-reposijudicialb.component';
import { EditReposijudicialbComponent } from './edit-reposijudicialb/edit-reposijudicialb.component';

const routes: Routes = [{
  path: '',
  component: ReposijudicialbComponent,
  children: [
    {
      path: 'add-reposijudicialb',
      component: AddReposijudicialbComponent
    },
    {
      path: 'list-reposijudicialb',
      component: ListReposijudicialbComponent
    },
    {
      path: 'list-reposijudicialb/edit-reposijudicialb/:id',
      component: EditReposijudicialbComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposijudicialbRoutingModule { }
