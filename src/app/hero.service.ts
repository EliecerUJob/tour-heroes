import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  messageService = inject(MessageService);
  http = inject(HttpClient);

  private heroesUrl = 'https://rickandmortyapi.com/api';
  
  getHeroes():Observable<any>{
    return this.http.get<any>(`${this.heroesUrl}/character`);
  }
  
  getHeroe(id: number):Observable<any> {
    this.log(`HeroService: fetched hero id=${id}`);
    return this.http.get<any>(`${this.heroesUrl}/character/${id}`);
  }

  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
}
