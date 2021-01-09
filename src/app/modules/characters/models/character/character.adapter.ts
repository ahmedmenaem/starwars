import { Injectable } from '@angular/core';
import { Adapter } from '../../../../shared/models/adapter';
import { Character } from './character.model';

@Injectable()
export class CharacterAdapter implements Adapter<Character> {
  adapt(item: any): Character {
    let itemUrl = item.url.split('/');
    const id = itemUrl[itemUrl.length - 2];
    const avatar = `assets/characters/${id}.png`;
    return new Character(
      id,
      avatar,
      item.birth_year,
      item.created,
      item.edited,
      item.eye_color,
      item.films,
      item.gender,
      item.hair_color,
      item.height,
      item.homeworld,
      item.mass,
      item.name,
      item.skin_color,
      item.species,
      item.starships,
      item.url
    );
  }
}
