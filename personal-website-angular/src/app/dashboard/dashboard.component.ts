import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  animeList: Anime[] = [];

  constructor(private animeService: AnimeService) {}
  
  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(): void {
    this.animeService.getAnimeList()
      .subscribe(animeList => this.animeList = animeList.slice(1, 5));
  }
}
