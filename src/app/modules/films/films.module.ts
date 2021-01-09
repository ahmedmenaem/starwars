import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './pages/films-list/films-list.component';
import { FilmsService } from './services/films/films.service';
import { FilmComponent } from './components/film/film.component';
import { FilmAdapter } from './models/film/film.adapter';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { LoaderModule } from '../../shared/components/loader/loader.module';

@NgModule({
  declarations: [FilmsListComponent, FilmComponent, FilmDetailsComponent],
  imports: [CommonModule, FilmsRoutingModule, HttpClientModule, LoaderModule],
  providers: [FilmsService, FilmAdapter],
})
export class FilmsModule {}
