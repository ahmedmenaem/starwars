import { TestBed, async, inject } from '@angular/core/testing';
import { CharactersService } from './characters.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharacterAdapter } from '../../models/character/character.adapter';

describe('CharactersService', () => {
  let mockedCharacterAdapter;

  beforeEach(async(() => {
    mockedCharacterAdapter = jasmine.createSpyObj(['adapt']);

    TestBed.configureTestingModule({
      providers: [
        CharactersService,
        { provide: CharacterAdapter, useValue: mockedCharacterAdapter },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  describe('get()', () => {
    it('should call get with the correct URL', inject(
      [CharactersService, HttpTestingController],
      (service: CharactersService, contoller: HttpTestingController) => {
        service.all().subscribe();
        const req = contoller.expectOne('api/people');
        expect(req.request.url).toEqual('api/people');
      }
    ));
  });

  describe('findOne()', () => {
    it('should call get with the correct URL', inject(
      [CharactersService, HttpTestingController],
      (service: CharactersService, contoller: HttpTestingController) => {
        service.findOne('1').subscribe();
        const req = contoller.expectOne('api/people/1');
        expect(req.request.url).toEqual('api/people/1');
      }
    ));
  });
});
