import { TestBed, async, inject } from '@angular/core/testing';
import { PlanetsService } from './planets.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PlanetAdapter } from '../../models/planet/planet.adapter';

describe('PlanetsService', () => {
  let mockedPlanetAdapter;

  beforeEach(async(() => {
    mockedPlanetAdapter = jasmine.createSpyObj(['adapt']);

    TestBed.configureTestingModule({
      providers: [
        PlanetsService,
        { provide: PlanetAdapter, useValue: mockedPlanetAdapter },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  describe('get()', () => {
    it('should call get with the correct URL', inject(
      [PlanetsService, HttpTestingController],
      (service: PlanetsService, contoller: HttpTestingController) => {
        service.all().subscribe();
        const req = contoller.expectOne('api/planets');
        expect(req.request.url).toEqual('api/planets');
      }
    ));
  });

  describe('findOne()', () => {
    it('should call get with the correct URL', inject(
      [PlanetsService, HttpTestingController],
      (service: PlanetsService, contoller: HttpTestingController) => {
        service.findOne('1').subscribe();
        const req = contoller.expectOne('api/planets/1');
        expect(req.request.url).toEqual('api/planets/1');
      }
    ));
  });
});
