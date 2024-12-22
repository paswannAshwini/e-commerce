import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { authGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CartListingComponent } from './cart-listing/cart-listing.component';
import { GadgetComponent } from './gadget/gadget.component';

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
  },
  {
    path:'about' , component: AboutComponent,
   
  },
  {
    path:'add-cart/:title' , component: AddCartComponent,
   
  },
  {
    path:'cart-listing' , component: CartListingComponent,
   
  },
  {
    path:'gadgets/:role' , component: GadgetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
