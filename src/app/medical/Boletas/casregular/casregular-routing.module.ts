import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasregularComponent } from './casregular.component';
import { AddCasregularComponent } from './add-casregular/add-casregular.component';
import { ListCasregularComponent } from './list-casregular/list-casregular.component';
import { EditCasregularComponent } from './edit-casregular/edit-casregular.component';

const routes: Routes = [{
  path: '',
  component: CasregularComponent,
  children: [
    {
      path: 'add-casregular',
      component: AddCasregularComponent
    },
    {
      path: 'list-casregular',
      component: ListCasregularComponent
    },
    {
      path: 'list-casregular/edit-casregular/:id',
      component: EditCasregularComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasregularRoutingModule { }
