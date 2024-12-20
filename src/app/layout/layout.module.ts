import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { AuthRoutingModule } from '../auth/auth-routing.module';
import{ AuthModule } from '../auth/auth.module';
import { LayoutComponent } from './layout/layout.component'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    // AuthRoutingModule
    AuthModule
  ],
  exports: [HeaderComponent,FooterComponent,LayoutComponent] 
})
export class LayoutModule { }
