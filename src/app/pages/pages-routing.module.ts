import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { authGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path:'dashboard' , component:DashboardComponent,
    
  },
  {
    path:'listing' , component:ListingComponent,
    canActivate: [authGuard],
  },
  {
    path:'profile' , component: ProfileComponent,
    canActivate:[authGuard]
  },
  {
    path:'service' , component: ServiceComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
