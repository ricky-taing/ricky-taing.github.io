import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Anime } from '../anime';
import { ANIME_LIST } from '../anime-list';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})

export class AnimeComponent {
  anime: 
    Anime = {
      id: 1,
      name: 'Natsume Yuujinchou Shi'
    };
  animeList = ANIME_LIST;
}
