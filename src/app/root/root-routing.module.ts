import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../master/master.module').then(m => m.MasterModule) },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  { path: '**', loadChildren: () => import('../master/master.module').then(m => m.MasterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
