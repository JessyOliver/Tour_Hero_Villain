import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes } from 'src/app/model/heroes';
import { Villains } from 'src/app/model/villains';
import { MultantsService } from 'src/app/services/mutants.service';

@Component({
  selector: 'app-display-mutants',
  templateUrl: './display-mutants.component.html',
  styleUrls: ['./display-mutants.component.scss']
})
export class DisplayMutantsComponent implements OnInit {

  constructor(
    private roote: ActivatedRoute,
    private service: MultantsService
  ) { }

  heroes!: Heroes[];
  @Input() hero?: Heroes;


  villains!: Villains[];
  @Input() villain?: Villains;

  ngOnInit(): void {
    
    this.getHero();
    this.getVillain();
  }

  getHero(): void {
    this.service.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  getVillain(): void {
    this.service.getVillains()
      .subscribe(villains => this.villains = villains);
  }

}
