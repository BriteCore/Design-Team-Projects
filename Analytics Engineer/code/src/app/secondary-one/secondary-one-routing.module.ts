import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondaryOneComponent } from './secondary-one.component';


const routes: Routes = [{
  path: '',
  component: SecondaryOneComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryOneRoutingModule { }
