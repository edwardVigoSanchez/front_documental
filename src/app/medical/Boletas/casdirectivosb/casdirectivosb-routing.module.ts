import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasdirectivosbComponent } from './casdirectivosb.component';
import { AddCasdirectivosbComponent } from './add-casdirectivosb/add-casdirectivosb.component';
import { ListCasdirectivosbComponent } from './list-casdirectivosb/list-casdirectivosb.component';
import { EditCasdirectivosbComponent } from './edit-casdirectivosb/edit-casdirectivosb.component';

const routes: Routes = [{
  path: '',
  component: CasdirectivosbComponent,
  children: [
    {
      path: 'add-casdirectivosb',
      component: AddCasdirectivosbComponent
    },
    {
      path: 'list-casdirectivosb',
      component: ListCasdirectivosbComponent
    },
    {
      path: 'list-casdirectivosb/edit-casdirectivosb/:id',
      component: EditCasdirectivosbComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasdirectivosbRoutingModule { }
