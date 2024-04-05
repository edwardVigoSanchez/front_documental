import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastransitoriosComponent } from './castransitorios.component';
import { AddCastransitoriosComponent } from './add-castransitorios/add-castransitorios.component';
import { ListCastransitoriosComponent } from './list-castransitorios/list-castransitorios.component';
import { EditCastransitoriosComponent } from './edit-castransitorios/edit-castransitorios.component';

const routes: Routes = [{
  path: '',
  component: CastransitoriosComponent,
  children: [
    {
      path: 'add-castransitorios',
      component: AddCastransitoriosComponent
    },
    {
      path: 'list-castransitorios',
      component: ListCastransitoriosComponent
    },
    {
      path: 'list-castransitorios/edit-castransitorios/:id',
      component: EditCastransitoriosComponent
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastransitoriosRoutingModule { }
