import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Heroes } from 'src/app/model/heroes';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective  implements OnInit{

  @HostBinding('style.background') colorsBack!: string;

  hero!: Heroes[];

  @Input() hero_db?: Heroes;

  color!: [];

  constructor( ) { }

  ngOnInit(): void {
  }

  @HostListener('mouseover') mouseTrue(){


    this.colorsBack =  'linear-gradient(255deg, blue 0%,  red 100%)';
  }

  @HostListener('mouseout') mouseFalse(){

    this.colorsBack =  'transparent';
  }

}
