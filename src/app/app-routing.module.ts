import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full', // Redirect to the auth module as the default route
  },
  {
    path:'auth' , loadChildren:()=> import('./auth/auth.module')
    .then(m =>m.AuthModule)
  },
  {
    path:'pages' , loadChildren:() => import('./pages/pages.module')
    .then(m =>m.PagesModule )
  },
  {
    path:'**'  , component:NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
