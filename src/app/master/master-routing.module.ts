import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children:[
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
