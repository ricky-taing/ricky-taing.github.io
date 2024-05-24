import { Component, Input } from '@angular/core';
import {NgIf, UpperCasePipe, Location } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})

export class AnimeDetailComponent {
  @Input() anime?: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location
  ) {}

  getAnime(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnime(id).subscribe(anime => this.anime = anime);
  }

  ngOnInit(): void {
    this.getAnime();
  }
}
