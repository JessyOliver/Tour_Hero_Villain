import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverDirective } from './mouse-hover.directive';

@NgModule({
  declarations: [
    MouseHoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MouseHoverDirective
  ]
})
export class MouseHoverDirectiveMdModule { }
