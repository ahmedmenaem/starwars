import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { PlanetDetailsComponent } from './planet-details.component';
import { mockedPlanets } from '../../models/planet/planet.mock';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { PlanetsService } from '../../services/planets/planets.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';

describe('PlanetDetailsComponent', () => {
  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<PlanetDetailsComponent>;
  let mockedPlanetsService;

  beforeEach(async(() => {
    mockedPlanetsService = jasmine.createSpyObj('CharactersService', [
      'findOne',
    ]);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlanetDetailsComponent, FakeloaderComponent],
      providers: [{ provide: PlanetsService, useValue: mockedPlanetsService }],
    }).compileComponents();
    fixture = TestBed.createComponent(PlanetDetailsComponent);
  }));

  it('should create a planet details component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should planet name after run ngOnInit', () => {
    mockedPlanetsService.findOne.and.returnValue(of(mockedPlanets[0]));
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toEqual(mockedPlanets[0].name);
  });
});
