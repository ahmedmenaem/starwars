import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { Character } from '../../models/character/character.model';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public characters$: Observable<Character[]>;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private charactersService: CharactersService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.characters$ = this.charactersService.all();
    this.searchService.onSearch$
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe(
        (res) => (this.characters$ = this.charactersService.search(res))
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
