import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CautelaresComponent } from './cautelares.component';
import { AddCautelaresComponent } from './add-cautelares/add-cautelares.component';
import { ListCautelaresComponent } from './list-cautelares/list-cautelares.component';
import { EditCautelaresComponent } from './edit-cautelares/edit-cautelares.component';

const routes: Routes = [{
  path: '',
  component: CautelaresComponent,
  children: [
    {
      path: 'add-cautelares',
      component: AddCautelaresComponent
    },
    {
      path: 'list-cautelares',
      component: ListCautelaresComponent
    },
    {
      path: 'list-cautelares/edit-cautelares/:id',
      component: EditCautelaresComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CautelaresRoutingModule { }
