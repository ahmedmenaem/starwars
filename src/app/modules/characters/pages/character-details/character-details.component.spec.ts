import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterDetailsComponent } from './character-details.component';
import { mockedCharacters } from '../../models/character/character.mock';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { CharactersService } from '../../services/characters/characters.service';
import { Component, Input } from '@angular/core';

describe('CharacterDetailsComponent', () => {
  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<CharacterDetailsComponent>;
  let mockedCharactersService;

  beforeEach(async(() => {
    mockedCharactersService = jasmine.createSpyObj('CharactersService', [
      'findOne',
    ]);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CharacterDetailsComponent, FakeloaderComponent],
      providers: [
        { provide: CharactersService, useValue: mockedCharactersService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterDetailsComponent);
  }));

  it('should create a character details component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should display character name after run ngOnInit', () => {
    mockedCharactersService.findOne.and.returnValue(of(mockedCharacters[0]));
    fixture.detectChanges();
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toEqual(mockedCharacters[0].name);
  });
});
