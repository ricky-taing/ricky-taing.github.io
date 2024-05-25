import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime } from './anime';
import { ANIME_LIST } from './anime-list';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private messageService: MessageService) { }

  getAnime(id: number): Observable<Anime> {
    const anime = ANIME_LIST.find(a => a.id === id)!;
    this.messageService.add(`AnimeService: fetched anime id=${id}`)
    return of(anime);
  }
  
  getAnimeList(): Observable<Anime[]> {
    const animeList = of(ANIME_LIST);
    this.messageService.add('AnimeService: fetched list of anime');
    return animeList;
  }
}
