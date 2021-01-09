import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmDetailsComponent } from './film-details.component';
import { mockedFilms } from '../../models/film/film.mock';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { FilmsService } from '../../services/films/films.service';
import { Component, Input } from '@angular/core';

describe('FilmDetailsComponent', () => {
  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<FilmDetailsComponent>;
  let mockedFilmsService;

  beforeEach(async(() => {
    mockedFilmsService = jasmine.createSpyObj('CharactersService', ['findOne']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FilmDetailsComponent, FakeloaderComponent],
      providers: [{ provide: FilmsService, useValue: mockedFilmsService }],
    }).compileComponents();
    fixture = TestBed.createComponent(FilmDetailsComponent);
  }));

  it('should create a film details component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should film title after run ngOnInit', () => {
    mockedFilmsService.findOne.and.returnValue(of(mockedFilms[0]));
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toEqual(mockedFilms[0].title);
  });
});
