import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryActionRoutingModule } from './primary-action-routing.module';
import { PrimaryActionComponent } from './primary-action/primary-action.component';


@NgModule({
  declarations: [PrimaryActionComponent],
  imports: [
    CommonModule,
    PrimaryActionRoutingModule
  ]
})
export class PrimaryActionModule { }
