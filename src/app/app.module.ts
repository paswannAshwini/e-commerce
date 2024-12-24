import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTooltipModule


 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
