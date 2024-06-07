import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// export interface Link {
//   name: string;
//   description: string;
//   link: string;
// }

// const LINKTREE_DATA: Link[] = [
const LINKTREE_DATA = [
  {name: 'Flickr', description: 'Check out all my photos', link: 'https://www.flickr.com/photos/193886304@N05/'},
  {name: 'MyAnimeList', description: 'View my entire list of anime', link: 'https://myanimelist.net/profile/55Ricky'},
  {name: 'Email', description: 'Get in touch with me', link: 'mailto:ricky.r.taing@gmail.com'},
];

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './linktree.component.html',
  styleUrl: './linktree.component.css'
})

export class LinktreeComponent {
  displayedColumns: string[] = ['name', 'description', 'link'];
  dataSource = LINKTREE_DATA;
}
