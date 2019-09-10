import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryThreeRoutingModule } from './secondary-three-routing.module';
import { SecondaryThreeComponent } from './secondary-three.component';


@NgModule({
  declarations: [SecondaryThreeComponent],
  imports: [
    CommonModule,
    SecondaryThreeRoutingModule
  ]
})
export class SecondaryThreeModule { }
