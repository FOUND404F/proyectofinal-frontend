import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkilledsPageComponent } from './skilleds-page.component';


const routes: Routes = [
  {
    path: '',
    component: SkilledsPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkilledsPageRoutingModule {}
