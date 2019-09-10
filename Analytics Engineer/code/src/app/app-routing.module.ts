import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
      },
      {
        path: 'primary-action',
        loadChildren: () => import('./primary-action/primary-action.module').then( m => m.PrimaryActionModule )
      },
      {
        path: 'secondary-one',
        loadChildren: () => import('./secondary-one/secondary-one.module').then( m => m.SecondaryOneModule )
      },
      {
        path: 'secondary-two',
        loadChildren: () => import('./secondary-two/secondary-two.module').then( m => m.SecondaryTwoModule )
      },
      {
        path: 'secondary-three',
        loadChildren: () => import('./secondary-three/secondary-three.module').then( m => m.SecondaryThreeModule )
      },
      ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
