import { Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/anime-list', pathMatch: 'full'},
    {path: 'anime-list', component: AnimeComponent},
    {path: 'top-anime', component: DashboardComponent},
    {path: 'detail/:id', component: AnimeDetailComponent},
];