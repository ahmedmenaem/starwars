import { Injectable } from '@angular/core';
import { Adapter } from '../../../../shared/models/adapter';
import { Film } from './film.model';

@Injectable()
export class FilmAdapter implements Adapter<Film> {
  adapt(item: any): Film {
    let itemUrl = item.url.split('/');
    const id = itemUrl[itemUrl.length - 2];
    const avatar = `assets/films/${id}.png`;
    return new Film(
      id,
      avatar,
      item.title,
      item.producer,
      item.director,
      item.episode_id,
      item.release_date,
      item.created,
      item.edited,
      item.opening_crawl
    );
  }
}
