import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  NgFor,
  NgIf,
  UpperCasePipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';

import { Anime } from '../anime';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { AnimeService } from '../anime.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, FormsModule, NgFor, NgIf, AnimeDetailComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})

export class AnimeComponent implements OnInit {
  animeList: Anime[] = [];

  constructor(private animeService: AnimeService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAnime();
  }
  
  getAnime(): void {
    this.animeService.getAnimeList().subscribe(animeList => this.animeList = animeList);
  }

}
