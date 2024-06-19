import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  heroes: Hero[]=[];
  heroService = inject(HeroService);
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{

    this.heroService.getHeroes()
        .subscribe( heroes=> this.heroes = heroes.slice(1,5) );

  }

}
