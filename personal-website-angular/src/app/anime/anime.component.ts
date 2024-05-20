import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';

import { Anime } from '../anime';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { AnimeService } from '../anime.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, AnimeDetailComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})

export class AnimeComponent implements OnInit {
  constructor(private animeService: AnimeService, private messageService: MessageService) {}

  animeList: Anime[] = [];
  selectedAnime?: Anime;

  onSelect(anime: Anime): void {
    this.selectedAnime = anime;
    this.messageService.add(`AnimeComponent: Selected anime id=${anime.id}`);
  }

  getAnime(): void {
    this.animeService.getAnimeList().subscribe(animeList => this.animeList = animeList);
  }

  ngOnInit(): void {
    this.getAnime();
  }
}
