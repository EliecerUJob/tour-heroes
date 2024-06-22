import { Component, Input, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit{

  heroService = inject(HeroService);
  location = inject(Location);
  @Input('id') heroId: string | null = '';
  hero: Hero | undefined;

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void{
    this.heroService.getHeroe(Number(this.heroId))
        .subscribe( hero=> this.hero = hero );
  }

  goBack():void{
    this.location.back();
  }

}
