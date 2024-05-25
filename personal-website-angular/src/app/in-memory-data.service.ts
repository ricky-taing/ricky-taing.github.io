import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const animeList = [
      { id: 1, name: 'Natsume Yuujinchou Movie' },
      { id: 2, name: 'Slime Season 2' },
      { id: 3, name: 'Oshi no Ko' },
      { id: 4, name: 'Kaiju No. 8' },
      { id: 5, name: 'Konosuba Season 3' },
      { id: 6, name: 'Demon Slayer' },
      { id: 7, name: 'Mushoku Tensei' },
      { id: 8, name: 'Spice and Wolf' },
      { id: 9, name: 'Yuru Camp' },
      { id: 10, name: 'Haikyuu Dumpster Battle' }
    ];
    return {animeList};
  }

  genId(animeList: Anime[]): number {
    return animeList.length > 0 ? Math.max(...animeList.map(anime => anime.id)) + 1 : 1;
  }
}
