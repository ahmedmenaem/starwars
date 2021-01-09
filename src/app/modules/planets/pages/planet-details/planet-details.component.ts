import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../../models/planet/planet.model';
import { PlanetsService } from '../../services/planets/planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit {
  public planetDetails$: Observable<Planet>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.planetDetails$ = this.planetsService.findOne(id);
    });
  }
}
