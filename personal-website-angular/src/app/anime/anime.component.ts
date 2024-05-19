import { Component } from '@angular/core';
import { 
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { Anime } from '../anime';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, AnimeDetailComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})

export class AnimeComponent {
  constructor(private animeService: AnimeService) {}

  // animeList: Observable<Anime[]> = new Observable;
  animeList: Anime[]= [];
  selectedAnime?: Anime;

  onSelect(anime: Anime): void {
    this.selectedAnime = anime;
  }

  getAnime(): void {
    this.animeList = this.animeService.getAnimeList();
  }

  ngOnInit(): void {
    this.getAnime();
  }
}
