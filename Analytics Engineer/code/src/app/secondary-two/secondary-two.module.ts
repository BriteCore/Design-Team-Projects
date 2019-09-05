import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryTwoRoutingModule } from './secondary-two-routing.module';
import { SecondaryTwoComponent } from './secondary-two.component';


@NgModule({
  declarations: [SecondaryTwoComponent],
  imports: [
    CommonModule,
    SecondaryTwoRoutingModule
  ]
})
export class SecondaryTwoModule { }
