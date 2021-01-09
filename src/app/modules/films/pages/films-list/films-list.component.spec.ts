import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmsListComponent } from './films-list.component';
import { mockedFilms } from '../../models/film/film.mock';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { Film } from '../../models/film/film.model';
import { of } from 'rxjs';

import { FilmsService } from '../../services/films/films.service';

describe('FilmsListComponent', () => {
  @Component({
    selector: 'app-film',
    template: `<div></div>`,
  })
  class FakeFilmComponent {
    @Input() film: Film;
  }

  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<FilmsListComponent>;
  let mockedFilmsService;

  beforeEach(async(() => {
    mockedFilmsService = jasmine.createSpyObj('FilmsService', ['all']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        FilmsListComponent,
        FakeFilmComponent,
        FakeloaderComponent,
      ],
      providers: [{ provide: FilmsService, useValue: mockedFilmsService }],
    }).compileComponents();
    fixture = TestBed.createComponent(FilmsListComponent);
  }));

  it('should create a films list component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should render 3 film components after run ngOnInit', () => {
    mockedFilmsService.all.and.returnValue(of(mockedFilms));
    fixture.detectChanges();
    const characterComponents = fixture.debugElement.queryAll(
      By.directive(FakeFilmComponent)
    );
    expect(characterComponents.length).toEqual(3);
  });
});
