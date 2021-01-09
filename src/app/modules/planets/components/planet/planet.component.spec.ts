import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanetComponent } from './planet.component';
import { mockedPlanets } from '../../models/planet/planet.mock';
import { By } from '@angular/platform-browser';

describe('FilmComponent', () => {
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlanetComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PlanetComponent);
  }));

  it('should create a character component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have the name film title when pass a film as an input', () => {
    const component: PlanetComponent = fixture.debugElement.componentInstance;
    component.planet = mockedPlanets[0];
    expect(component.planet.name).toEqual(mockedPlanets[0].name);
  });

  it('should render the film title when pass a film as an input', () => {
    const component: PlanetComponent = fixture.debugElement.componentInstance;
    component.planet = mockedPlanets[0];
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toEqual(mockedPlanets[0].name);
  });
});
