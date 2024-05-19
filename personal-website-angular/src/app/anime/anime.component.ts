import { Component } from '@angular/core';
import { 
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Anime } from '../anime';
import { ANIME_LIST } from '../anime-list';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, AnimeDetailComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})

export class AnimeComponent {
  animeList = ANIME_LIST;
  selectedAnime?: Anime;

  onSelect(anime: Anime): void {
    this.selectedAnime = anime;
  }
}
