import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkilledsCreatePageRoutingModule } from './skilleds-create-page-routing.module';
import { SkilledsCreatePageComponent } from '../skilleds-create-page/skilleds-create-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(), // Módulo multiselect
    SkilledsCreatePageRoutingModule,
  ],
  declarations: [
    SkilledsCreatePageComponent,
  ]
})
export class SkilledsCreatePageModule {}
