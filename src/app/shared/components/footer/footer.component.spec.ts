import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
  }));

  it('should create a header component', () => {
    const footerComponent = fixture.debugElement.componentInstance;
    expect(footerComponent).toBeTruthy();
  });

  it(`should have a paragraph with text '© 2020 Company, Inc.'`, () => {
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('.copyright'));
    expect(paragraph.nativeElement.textContent).toContain(
      '© 2020 Company, Inc.'
    );
  });
});
