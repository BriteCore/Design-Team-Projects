import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryThreeComponent } from './secondary-three.component';


const routes: Routes = [{
  path: '',
  component: SecondaryThreeComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryThreeRoutingModule { }
