import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsCreatePageComponent } from './tags-create-page.component';


const routes: Routes = [
  {
    path: '',
    component: TagsCreatePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsCreatePageRoutingModule {}
