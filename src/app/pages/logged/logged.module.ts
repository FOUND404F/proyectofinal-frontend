import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoggedComponent } from './logged.component';
import { LoggedPageRoutingModule } from './logged-routing.module';

import { NavComponent } from './../../components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoggedPageRoutingModule
  ],
  declarations: [
    LoggedComponent,
    NavComponent
  ]
})
export class LoggedPageModule {}
