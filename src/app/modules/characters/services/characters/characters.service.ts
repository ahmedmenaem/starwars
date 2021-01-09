import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../../models/character/character.model';
import { CharacterAdapter } from '../../models/character/character.adapter';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(
    private http: HttpClient,
    private characterAdapter: CharacterAdapter
  ) {}

  public all(): Observable<Character[]> {
    return this.http.get('api/people').pipe(
      map((data: any) => data.results),
      map((items: any[]) =>
        items.map((item) => this.characterAdapter.adapt(item))
      )
    );
  }

  public findOne(id: string): Observable<Character> {
    return this.http
      .get(`api/people/${id}`)
      .pipe(map((data: any) => this.characterAdapter.adapt(data)));
  }

  public search(query: string): Observable<Character[]> {
    return this.http.get(`api/people/?search=${query}`).pipe(
      map((data: any) => data.results),
      map((items: any[]) =>
        items.map((item) => this.characterAdapter.adapt(item))
      )
    );
  }
}
