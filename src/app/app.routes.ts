import { Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

export const routes: Routes = [
    // {path: 'home', component: HomeComponent},
    {path: 'anime-list', component: AnimeComponent},
    {path: 'top-anime', component: DashboardComponent},
    {path: 'detail/:id', component: AnimeDetailComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'photo-gallery', component: PhotoGalleryComponent},
    {path: '', redirectTo: '/about-me', pathMatch: 'full'},
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
];
