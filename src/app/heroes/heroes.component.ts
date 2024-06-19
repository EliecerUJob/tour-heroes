import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, 
    HeroDetailComponent,
    FormsModule,
    RouterModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  
  heroService = inject(HeroService);

  heroes:Hero[]=[];

  getHeroes():void{
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

}
