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
import { HomeComponent } from './home/home.component';
import { CheckoutitemComponent } from './checkoutitem/checkoutitem.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'dashboard' , component:DashboardComponent,
    
  },
  {
    path:'home' , component: HomeComponent
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
    canActivate:[authGuard]
   
  },
  {
    path:'add-cart/:title' , component: AddCartComponent,
    
   
  },
  {
    path:'cart-listing' , component: CartListingComponent,
    
   
  },
  {
    path:'gadgets/:role' , component: GadgetComponent,
    canActivate:[authGuard]
  },
  {
    path:'checkout' , component: CheckoutitemComponent,
    canActivate:[authGuard]
  },
  {
    path:'payment-mode' , component: PaymentmodeComponent,
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
