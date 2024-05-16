import { Component } from '@angular/core';
import { Anime } from './anime';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {
  anime: Anime = {
    id: 1,
    name: 'Natsume Yuujinchou Shi'
  };
}
