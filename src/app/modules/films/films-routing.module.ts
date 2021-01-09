import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './pages/films-list/films-list.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';

export const routes: Routes = [
  {
    path: '',
    component: FilmsListComponent,
  },
  {
    path: ':id',
    component: FilmDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
