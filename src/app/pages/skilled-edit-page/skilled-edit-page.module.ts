import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkilledEditPageRoutingModule } from './skilled-edit-page-routing.module';
import { SkilledEditPageComponent } from '../skilled-edit-page/skilled-edit-page.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(), //Multiselector
    TabsModule.forRoot(), //Bootstrap Tags
    TooltipModule.forRoot(), //Bootstrap Tooltip
    SkilledEditPageRoutingModule,
  ],
  declarations: [
    SkilledEditPageComponent,
  ]
})
export class SkilledEditPageModule {}
