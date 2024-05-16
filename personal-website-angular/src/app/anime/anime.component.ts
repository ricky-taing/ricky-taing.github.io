import { Component } from '@angular/core';
import { 
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Anime } from '../anime';
import { ANIME_LIST } from '../anime-list';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
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
