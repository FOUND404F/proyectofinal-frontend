import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkilledsPageRoutingModule } from './skilleds-page-routing.module';
import { SkilledsPageComponent } from '../skilleds-page/skilleds-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule, // Módulo componentes Shared
    SkilledsPageRoutingModule,
  ],
  declarations: [
    SkilledsPageComponent
  ]
})
export class SkilledsPageModule {}
