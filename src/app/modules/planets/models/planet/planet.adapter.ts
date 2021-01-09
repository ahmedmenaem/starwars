import { Injectable } from '@angular/core';
import { Adapter } from '../../../../shared/models/adapter';
import { Planet } from './planet.model';

@Injectable()
export class PlanetAdapter implements Adapter<Planet> {
  adapt(item: any): Planet {
    let itemUrl = item.url.split('/');
    const id = itemUrl[itemUrl.length - 2];
    const avatar = `assets/planets/${id}.png`;
    return new Planet(
      id,
      avatar,
      item.climate,
      item.created,
      item.diameter,
      item.edited,
      item.films,
      item.gravity,
      item.name,
      item.orbital_period,
      item.population,
      item.residents,
      item.rotation_period,
      item.surface_water,
      item.terrain,
      item.url
    );
  }
}
