import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Character } from '../../models/character';
import { environment } from '../../../environments/environment';
import { Episode } from '../../models/episode';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = `${environment.apiURL}/character`;

  constructor(private http: HttpClient) { }

  getCharacters(page: number, name: string): Observable<Character[]> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get<Character[]>(this.url, { params }).pipe(
      map((res: any) => res),
      catchError((error) => {
        console.log('Error: ', error);
        throw error;
      })
    );
  }

  // Método para obtener un personaje por id
  getCharacterById(id: number): Observable<Character> {
    const url = `${this.url}/${id}`;
    return this.http.get<Character>(url);
  }


  // Método para obtener la lista de episodios por personaje
  
}
