import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayMutantsMdRoutingModule } from './display-mutants-md-routing.module';
import { DisplayMutantsComponent } from 'src/app/modules/display-mutants-md/display-mutants/display-mutants.component';
import { MouseHoverDirectiveMdModule } from '../shared/components/mouse-hover.module';


@NgModule({
  declarations: [
    DisplayMutantsComponent,

  ],
  imports: [
    CommonModule,
    DisplayMutantsMdRoutingModule,
    MouseHoverDirectiveMdModule
  ],
  exports: [
    DisplayMutantsComponent
  ]
})
export class DisplayMutantsMdModule { }
