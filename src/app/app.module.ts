import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule} from './layout/layout.module'



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
