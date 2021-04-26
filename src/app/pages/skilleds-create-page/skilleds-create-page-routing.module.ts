import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkilledsCreatePageComponent } from './skilleds-create-page.component';


const routes: Routes = [
  {
    path: '',
    component: SkilledsCreatePageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkilledsCreatePageRoutingModule {}
