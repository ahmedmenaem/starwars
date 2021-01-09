import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharactersListComponent } from './characters-list.component';
import { mockedCharacters } from '../../models/character/character.mock';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { Character } from '../../models/character/character.model';
import { of } from 'rxjs';

import { CharactersService } from '../../services/characters/characters.service';

describe('CharactersListComponent', () => {
  @Component({
    selector: 'app-character',
    template: `<div></div>`,
  })
  class FakeCharacterComponent {
    @Input() character: Character;
  }

  @Component({
    selector: 'app-loader',
    template: `<div></div>`,
  })
  class FakeloaderComponent {
    @Input() isLoader: boolean;
  }

  let fixture: ComponentFixture<CharactersListComponent>;
  let mockedCharactersService;

  beforeEach(async(() => {
    mockedCharactersService = jasmine.createSpyObj('FilmsService', ['all']);
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        CharactersListComponent,
        FakeCharacterComponent,
        FakeloaderComponent,
      ],
      providers: [
        { provide: CharactersService, useValue: mockedCharactersService },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CharactersListComponent);
  }));

  it('should create a character component instance', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should should render 3 charcter components after run ngOnInit', () => {
    mockedCharactersService.all.and.returnValue(of(mockedCharacters));
    fixture.detectChanges();
    const characterComponents = fixture.debugElement.queryAll(
      By.directive(FakeCharacterComponent)
    );
    expect(characterComponents.length).toEqual(3);
  });
});
