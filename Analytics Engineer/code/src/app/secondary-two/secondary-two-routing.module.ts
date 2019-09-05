import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryTwoComponent } from './secondary-two.component';

const routes: Routes = [{
  path: '',
  component: SecondaryTwoComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryTwoRoutingModule { }
