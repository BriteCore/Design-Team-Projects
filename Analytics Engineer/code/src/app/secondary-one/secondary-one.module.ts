import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryOneRoutingModule } from './secondary-one-routing.module';
import { SecondaryOneComponent } from './secondary-one.component';


@NgModule({
  declarations: [SecondaryOneComponent],
  imports: [
    CommonModule,
    SecondaryOneRoutingModule
  ]
})
export class SecondaryOneModule { }
