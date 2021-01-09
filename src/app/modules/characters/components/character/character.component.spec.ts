import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharcterComponent } from './character.component';
import { mockedCharacters } from '../../models/character/character.mock';
import { By } from '@angular/platform-browser';

describe('CharacterComponent', () => {
  let fixture: ComponentFixture<CharcterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CharcterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CharcterComponent);
  }));

  it('should create a character component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have the name character name when pass a character as an input', () => {
    const component: CharcterComponent = fixture.debugElement.componentInstance;
    component.character = mockedCharacters[0];
    expect(component.character.name).toEqual(mockedCharacters[0].name);
  });

  it('should render the name character name when pass a character as an input', () => {
    const component: CharcterComponent = fixture.debugElement.componentInstance;
    component.character = mockedCharacters[0];
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3.nativeElement.textContent).toEqual(mockedCharacters[0].name);
  });
});
