import { Routes } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'anime-list', component: AnimeComponent},
    {path: 'dashboard', component: DashboardComponent},
];
