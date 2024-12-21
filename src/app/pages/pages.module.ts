import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { AddComponent } from './listing/add/add.component';
import { LayoutModule } from '../layout/layout.module';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component'


@NgModule({
  declarations: [
    DashboardComponent,
    ListingComponent,
    AddComponent,
    BannerSliderComponent,
    ProfileComponent,
    ServiceComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule { }
