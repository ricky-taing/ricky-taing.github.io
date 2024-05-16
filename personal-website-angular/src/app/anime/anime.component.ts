import { Component } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {
  anime: Anime = {
    id: 1,
    name: 'Natsume Yuujinchou Shi'
  };
}
