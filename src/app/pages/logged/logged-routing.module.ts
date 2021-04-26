import { LoggedComponent } from './logged.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [ // Rutas hijas de logged
      {
        path: 'skilleds',
        loadChildren: () => import('../skilleds-page/skilleds-page.module').then( m => m.SkilledsPageModule)
      },
      {
        path: 'skilleds/create',
        loadChildren: () => import('../skilleds-create-page/skilleds-create-page.module').then( m => m.SkilledsCreatePageModule)
      },
      {
        path: 'skilleds/:id/edit',
        loadChildren: () => import('../skilled-edit-page/skilled-edit-page.module').then( m => m.SkilledEditPageModule)
      },
      {
        path: 'tags',
        loadChildren: () => import('../tags-page/tags-page.module').then( m => m.TagsPageModule)
      },
      {
        path: 'tags/create',
        loadChildren: () => import('../tags-create-page/tags-create-page.module').then( m => m.TagsCreatePageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedPageRoutingModule {}
