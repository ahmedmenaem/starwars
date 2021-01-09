import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
  }));

  it('should create a header component', () => {
    const headerComponent = fixture.debugElement.componentInstance;
    expect(headerComponent).toBeTruthy();
  });

  it(`should have a logo with alt 'starwars'`, () => {
    fixture.detectChanges();
    const logo = fixture.debugElement.query(By.css('.logo__image'));
    expect(logo.attributes.alt).toEqual('starwars');
  });

  it('should render an unorder list with 4 elements', () => {
    fixture.detectChanges();
    const ul = fixture.debugElement.query(By.css('ul'));
    expect(ul.children.length).toEqual(4);
  });
});
