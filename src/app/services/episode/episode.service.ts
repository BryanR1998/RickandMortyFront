import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, switchMap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Episode } from '../../models/episode';
import { Character } from '../../models/character';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private url = `${environment.apiURL}`;

  constructor(private http: HttpClient) { }

  // Método para obtener los todos los episodios
  // getEpisodes(): Observable<Episode[]> {
  //   const url = `${this.url}/episode/`;
  //   return this.http.get<Episode[]>(url);
  // }

  getEpisodes(): Observable<Episode[]> {
    
    const pages = [1, 2, 3]; // Hacer llamadas para las primeras 3 páginas
    const url = `${this.url}/episode`;
    const requests = pages.map(page => this.http.get(`${url}/?page=${page}`).pipe(
      map((data: any) => data.results)
    ));
    return forkJoin(requests).pipe(
      map((episodes: Episode[][]) => episodes.reduce((acc, val) => acc.concat(val), []))
    );
  }

  // Método para obtener los detalles de un episodio por su id
  getEpisodeById(id: number): Observable<Episode> {
    const url = `${this.url}/episode/${id}`;
    return this.http.get<Episode>(url);
  }

  // Método para obtener la lista de episodios por personaje
  getEpisodesByCharacterId(id: number): Observable<Episode[] | any> {
    const url = `${this.url}/character/${id}`;

    // Retorna un Observable que emite un arreglo de objetos Episode
    return this.http.get(url).pipe(

      switchMap((data: any) => {
        const episodeUrls = data.episode;

        // Realizar una petición para obtener los detalles de cada episodio
        const episodeRequests = episodeUrls.map((url: any) => this.http.get(url));

        // Combinar las respuestas en un único observable
        return forkJoin(episodeRequests);
      })

    )

  }

  // Método para obtener la lista de personajes por episodio
  getCharacterByEpisodesId(id: number): Observable<Character[] | any> {
    const url = `${this.url}/episode/${id}`;

    // Retorna un Observable que emite un arreglo de objetos Character
    return this.http.get(url).pipe(

      switchMap((data: any) => {
        const characterUrls = data.characters;

        // Realizar una petición para obtener los detalles de cada personaje
        const characterRequests = characterUrls.map((url: any) => this.http.get(url));

        // Combinar las respuestas en un único observable
        return forkJoin(characterRequests);
      })

    )

  }

}
