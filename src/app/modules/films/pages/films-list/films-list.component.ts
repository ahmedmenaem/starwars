import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilmsService } from '../../services/films/films.service';
import { SearchService } from '../../../../shared/services/search.service';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit, OnDestroy {
  public films$: Observable<any[]>;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private filmsService: FilmsService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.films$ = this.filmsService.all();
    this.searchService.onSearch$
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe((res) => (this.films$ = this.filmsService.search(res)));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
