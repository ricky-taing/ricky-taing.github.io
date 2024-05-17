import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "リッキーのブログ";
}
