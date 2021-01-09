import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/film/film.model';
import { FilmsService } from '../../services/films/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit {
  public filmDetails$: Observable<Film>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.filmDetails$ = this.filmsService.findOne(id);
    });
  }
}
