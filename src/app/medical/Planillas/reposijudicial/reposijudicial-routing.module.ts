import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposijudicialComponent } from './reposijudicial.component';
import { AddReposijudicialComponent } from './add-reposijudicial/add-reposijudicial.component';
import { ListReposijudicialComponent } from './list-reposijudicial/list-reposijudicial.component';
import { EditReposijudicialComponent } from './edit-reposijudicial/edit-reposijudicial.component';

const routes: Routes = [{
  path: '',
  component:ReposijudicialComponent ,
  children: [
    {
      path: 'add-reposijudicial',
      component: AddReposijudicialComponent
    },
    {
      path: 'list-reposijudicial',
      component: ListReposijudicialComponent
    },
    {
      path: 'list-reposijudicial/edit-reposijudicial/:id',
      component: EditReposijudicialComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposijudicialRoutingModule { }
