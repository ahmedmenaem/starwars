import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmComponent } from './film.component';
import { mockedFilms } from '../../models/film/film.mock';
import { By } from '@angular/platform-browser';

describe('FilmComponent', () => {
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FilmComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FilmComponent);
  }));

  it('should create a film component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have the film title when pass a film as an input', () => {
    const component: FilmComponent = fixture.debugElement.componentInstance;
    component.film = mockedFilms[0];
    expect(component.film.title).toEqual(mockedFilms[0].title);
  });

  it('should render the film title when pass a film as an input', () => {
    const component: FilmComponent = fixture.debugElement.componentInstance;
    component.film = mockedFilms[0];
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toEqual(mockedFilms[0].title);
  });
});
