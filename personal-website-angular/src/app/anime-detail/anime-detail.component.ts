import { Component, Input } from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})

export class AnimeDetailComponent {
  @Input() anime?: Anime;
}
