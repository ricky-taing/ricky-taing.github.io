import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime } from './anime';
import { ANIME_LIST } from './anime-list';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() { }

  getAnimeList(): Observable<Anime[]> {
    const animeList = of(ANIME_LIST);  
    return animeList;
  }
}
