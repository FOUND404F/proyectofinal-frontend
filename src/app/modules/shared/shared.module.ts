import { CustomSelectComponent } from './../../components/custom-select/custom-select.component';
import { PageHeaderComponent } from './../../components/page-header/page-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    PageHeaderComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot() //Módulo Dropdown
  ],
  exports: [
    PageHeaderComponent, //Módulo del Header
    CustomSelectComponent //CustomSelect
  ]
})
export class SharedModule { }
