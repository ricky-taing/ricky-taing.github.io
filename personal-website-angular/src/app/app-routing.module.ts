import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

// const routes: Routes = [
export const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
    { path: 'anime-list', component: AnimeComponent },
    { path: 'top-anime', component: DashboardComponent },
    { path: 'detail/:id', component: AnimeDetailComponent },
    { path: '', redirectTo: '/anime-list', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}