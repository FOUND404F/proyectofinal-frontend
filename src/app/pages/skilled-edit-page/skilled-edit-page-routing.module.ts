import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkilledEditPageComponent } from './skilled-edit-page.component';


const routes: Routes = [
  {
    path: '',
    component: SkilledEditPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkilledEditPageRoutingModule {}
