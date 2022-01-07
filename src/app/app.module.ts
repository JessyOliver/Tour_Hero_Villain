import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuMdModule } from './modules/menu-md/menu-md.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuMdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
