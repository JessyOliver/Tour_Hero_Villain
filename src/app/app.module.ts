import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayMutantsMdModule } from './modules/display-mutants-md/display-mutants-md.module';
import { MenuMdModule } from './modules/menu-md/menu-md.module';
import { MouseHoverDirectiveMdModule } from './modules/shared/components/mouse-hover.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenuMdModule,
    DisplayMutantsMdModule,
    MouseHoverDirectiveMdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
