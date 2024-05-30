import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Anime } from './anime';
import { ANIME_LIST } from './anime-list';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  // private animeListUrl = '/api/animeList';
  private animeListUrl = 'api/anime-list';

  private log(message: string) {
    this.messageService.add(`AnimeService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  getAnime(id: number): Observable<Anime> {
    const anime = ANIME_LIST.find(a => a.id === id)!;
    this.log(`AnimeService: fetched anime id=${id}`)
    return of(anime);
  }
  
  // should be getting and returning Observable but failing?
  getAnimeList(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.animeListUrl)
  // getAnimeList(): Observable<any> {
    // return this.http.get(this.animeListUrl)
    // return this.http.get(this.animeListUrl, { responseType: 'text' })
    .pipe(
      tap(_ => this.log('fetched animeList')), 
      catchError(this.handleError<Anime[]>('getAnimeList', [])));
  }
}