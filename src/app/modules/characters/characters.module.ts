import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CharacterAdapter } from './models/character/character.adapter';
import { CharactersService } from './services/characters/characters.service';
import { CharcterComponent } from './components/character/character.component';
import { LoaderModule } from '../../shared/components/loader/loader.module';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailsComponent,
    CharcterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, HttpClientModule, LoaderModule],
  providers: [CharacterAdapter, CharactersService],
})
export class CharactersModule {}
