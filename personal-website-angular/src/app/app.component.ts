import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { AnimeComponent } from './anime/anime.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private scroller: ViewportScroller) {}
  title = "Ricky's Blog";
  langBtnText = "Change to Japanese";

  changeLang(): void {
    if (this.title === "Ricky's Blog") {
      this.title= "リッキーのブログ";
      this.langBtnText = "Change to English";
    } else {
      this.title = "Ricky's Blog";
      this.langBtnText = "Change to Japanese";
    }
  }

  returnTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
