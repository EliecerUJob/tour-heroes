import { Component, Input, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  
  hero: Hero | undefined;
  
  route = inject(ActivatedRoute);
  heroService = inject(HeroService);
  location = inject(Location);
  
  ngOnInit(): void {
    this.getHero();
  }

  getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroe(id)
        .subscribe( hero=> this.hero = hero );
  }

}
