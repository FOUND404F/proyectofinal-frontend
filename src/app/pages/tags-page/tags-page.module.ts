import { DeleteTagModalComponent } from './../../components/delete-tag-modal/delete-tag-modal.component';
import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TagsPageRoutingModule } from './tags-page-routing.module';
import { TagsPageComponent } from '../tags-page/tags-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot(), // Bootstrap modales
    TagsPageRoutingModule,
  ],
  declarations: [
    TagsPageComponent,
    DeleteTagModalComponent
  ],
  entryComponents: [ // Componentes modales
    DeleteTagModalComponent
  ]
})
export class TagsPageModule {}
