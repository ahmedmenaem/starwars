import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planet } from '../../models/planet/planet.model';
import { PlanetAdapter } from '../../models/planet/planet.adapter';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
  constructor(private http: HttpClient, private planetAdapter: PlanetAdapter) {}

  public all(): Observable<Planet[]> {
    return this.http.get('api/planets').pipe(
      map((data: any) => data.results),
      map((items: any[]) => items.map((item) => this.planetAdapter.adapt(item)))
    );
  }

  public findOne(id: string): Observable<Planet> {
    return this.http
      .get(`api/planets/${id}`)
      .pipe(map((data: any) => this.planetAdapter.adapt(data)));
  }

  public search(query: string): Observable<Planet[]> {
    return this.http.get(`api/planets/?search=${query}`).pipe(
      map((data: any) => data.results),
      map((items: any[]) => items.map((item) => this.planetAdapter.adapt(item)))
    );
  }
}
