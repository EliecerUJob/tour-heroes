import { Injectable, inject } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  messageService = inject(MessageService);
  
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of<Hero[]>(HEROES);
  }
  
  getHeroe(id: number):Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find( (hero:Hero) => hero.id === id ));
  }
}