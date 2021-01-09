import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../../models/film/film.model';
import { FilmAdapter } from '../../models/film/film.adapter';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  constructor(private http: HttpClient, private filmAdapter: FilmAdapter) {}

  public all(): Observable<Film[]> {
    return this.http.get('api/films').pipe(
      map((data: any) => data.results),
      map((items: any[]) => items.map((item) => this.filmAdapter.adapt(item)))
    );
  }

  public findOne(id: string): Observable<Film> {
    return this.http.get(`api/films/${id}`).pipe(
      map((data: any) => {
        return this.filmAdapter.adapt(data);
      })
    );
  }

  public search(query: string): Observable<Film[]> {
    return this.http.get(`api/films/?search=${query}`).pipe(
      map((data: any) => data.results),
      map((items: any[]) => items.map((item) => this.filmAdapter.adapt(item)))
    );
  }
}
