import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryActionComponent } from './primary-action/primary-action.component';


const routes: Routes = [{
  path: '',
  component: PrimaryActionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryActionRoutingModule { }
