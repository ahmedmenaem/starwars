import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetsListComponent } from './planets-list.component';
import { mockedPlanets } from '../../models/planet/planet.mock';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { Planet } from '../../models/planet/planet.model';
import { of } from 'rxjs';

import { PlanetsService } from '../../services/planets/planets.service';

describe('PlanetsListComponent', () => {
  @Component({
    selector: 'app-planet',
    template: `<div></div>`,
  })
  class FakePlanetComponent {
    @Input() planet: Planet;
  }

  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<PlanetsListComponent>;
  let mockedPlanetsService;

  beforeEach(async(() => {
    mockedPlanetsService = jasmine.createSpyObj('FilmsService', ['all']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        PlanetsListComponent,
        FakePlanetComponent,
        FakeloaderComponent,
      ],
      providers: [{ provide: PlanetsService, useValue: mockedPlanetsService }],
    }).compileComponents();
    fixture = TestBed.createComponent(PlanetsListComponent);
  }));

  it('should create a films list component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should render 3 film components after run ngOnInit', () => {
    mockedPlanetsService.all.and.returnValue(of(mockedPlanets));
    fixture.detectChanges();
    const characterComponents = fixture.debugElement.queryAll(
      By.directive(FakePlanetComponent)
    );
    expect(characterComponents.length).toEqual(3);
  });
});
