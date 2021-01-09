import { TestBed, async, inject } from '@angular/core/testing';
import { FilmsService } from './films.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FilmAdapter } from '../../models/film/film.adapter';
import { mockedFilms } from '../../models/film/film.mock';

describe('FilmsService', () => {
  let mockedFilmsAdapter;

  beforeEach(async(() => {
    mockedFilmsAdapter = jasmine.createSpyObj(['adapt']);

    TestBed.configureTestingModule({
      providers: [
        FilmsService,
        { provide: FilmAdapter, useValue: mockedFilmsAdapter },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  describe('get()', () => {
    it('should call get with the correct URL', inject(
      [FilmsService, HttpTestingController],
      (service: FilmsService, contoller: HttpTestingController) => {
        service.all().subscribe();
        const req = contoller.expectOne('api/films');
        expect(req.request.url).toEqual('api/films');
      }
    ));
  });

  describe('findOne()', () => {
    it('should call get with the correct URL', inject(
      [FilmsService, HttpTestingController],
      (service: FilmsService, contoller: HttpTestingController) => {
        service.findOne('1').subscribe();
        const req = contoller.expectOne('api/films/1');
        expect(req.request.url).toEqual('api/films/1');
      }
    ));
  });
});
