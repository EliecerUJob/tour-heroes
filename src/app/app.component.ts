import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeroesComponent, 
    CommonModule,
    MessagesComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of heroes';
}
