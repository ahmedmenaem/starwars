import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character/character.model';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  public characterDetails$: Observable<Character>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.characterDetails$ = this.charactersService.findOne(id);
    });
  }
}
