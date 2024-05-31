import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  // constructor() { }

  createDb() {
    const animeList = [
      { id: 12, name: 'Natsume Yuujinchou Movie' },
      { id: 13, name: 'Slime Season 2' },
      { id: 14, name: 'Oshi no Ko' },
      { id: 15, name: 'Kaiju No. 8' },
      { id: 16, name: 'Konosuba Season 3' },
      { id: 17, name: 'Demon Slayer' },
      { id: 18, name: 'Mushoku Tensei' },
      { id: 19, name: 'Spice and Wolf' },
      { id: 20, name: 'Yuru Camp' },
      { id: 21, name: 'Haikyuu Dumpster Battle' }
    ];
    return {'anime-list': animeList};
  }

  genId(animeList: Anime[]): number {
    // return animeList.length > 0 ? Math.max(...animeList.map(anime => anime.id)) + 1 : 1;
    return animeList.length > 0 ? Math.max(...animeList.map(anime => anime.id)) + 1 : 11;
  }
}
