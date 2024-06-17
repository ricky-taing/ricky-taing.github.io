import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// export interface Link {
//   name: string;
//   description: string;
//   link: string;
// }

// const LINKTREE_DATA: Link[] = [
const LINKTREE_DATA = [
  {name: 'Flickr', description: 'See all my photos here', link: 'https://www.flickr.com/photos/193886304@N05/'},
  {name: 'Github', description: 'Check out my other projects', link: 'https://github.com/ricky-taing'},
  {name: 'LinkedIn', description: 'Send me a message', link: 'https://www.linkedin.com/in/ricky-taing-30b358185/'},
  {name: 'Email', description: 'Contact me at ricky.r.taing@gmail.com', link: 'mailto:ricky.r.taing@gmail.com'},
  // {name: 'MyAnimeList', description: 'View my entire list of anime', link: 'https://myanimelist.net/profile/55Ricky'},
];

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './linktree.component.html',
  styleUrl: './linktree.component.css'
})

export class LinktreeComponent {
  // displayedColumns: string[] = ['name', 'description', 'link'];
  displayedColumns: string[] = ['name', 'description'];
  dataSource = LINKTREE_DATA;
}
