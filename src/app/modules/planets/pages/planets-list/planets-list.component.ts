import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { Planet } from '../../models/planet/planet.model';
import { PlanetsService } from '../../services/planets/planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss'],
})
export class PlanetsListComponent implements OnInit {
  public planets$: Observable<Planet[]>;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private planetsService: PlanetsService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.planets$ = this.planetsService.all();
    this.searchService.onSearch$
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe((res) => (this.planets$ = this.planetsService.search(res)));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
