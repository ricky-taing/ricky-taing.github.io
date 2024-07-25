import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { AnimeComponent } from './anime/anime.component';
import { MessagesComponent } from './messages/messages.component';
import { LinktreeComponent } from './linktree/linktree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgOptimizedImage, AnimeComponent, MessagesComponent, LinktreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private scroller: ViewportScroller) {}
  title = "RICKY TAING";
  // langBtnText = "Japanese Title";

  changeLang(): void {
    if (this.title === "RICKY TAING") {
      this.title= "リッキー";
      // this.langBtnText = "English Title";
    } else {
      this.title = "RICKY TAING";
      // this.langBtnText = "Japanese Title";
    }
  }

  returnTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
