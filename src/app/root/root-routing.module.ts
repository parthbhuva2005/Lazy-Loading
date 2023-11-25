import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../master/master.module').then(m => m.MasterModule) },
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule) },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
