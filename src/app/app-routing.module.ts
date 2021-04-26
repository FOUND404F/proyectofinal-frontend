import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', //http:localhost:4200/
    redirectTo: '/logged/skilleds',
    pathMatch: 'full'
  },
  {
    path: 'logged', //http:localhost:4200/login
    loadChildren: () => import('./pages/logged/logged.module').then( m => m.LoggedPageModule),  //loadChildren para el lazyLoading
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
