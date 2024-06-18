import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, 
    HeroDetailComponent,
    FormsModule
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  
  heroes = HEROES;

  heroSelect: Hero | undefined;
  
  onSelect(hero: Hero):void {
    this.heroSelect = hero; 
    console.log(this.heroSelect.name);
  }

}
