import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuMdRoutingModule } from './menu-md-routing.module';
import { MenuComponent } from 'src/app/modules/menu-md/menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuMdRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuMdModule { }
