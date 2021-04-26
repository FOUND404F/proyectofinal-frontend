import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TagsCreatePageRoutingModule } from './tags-create-page-routing.module';
import { TagsCreatePageComponent } from '../tags-create-page/tags-create-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TagsCreatePageRoutingModule,
  ],
  declarations: [
    TagsCreatePageComponent
  ]
})
export class TagsCreatePageModule {}
