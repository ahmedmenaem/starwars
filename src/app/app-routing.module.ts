import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'en', pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
      },
      {
        path: 'films',
        loadChildren: './modules/films/films.module#FilmsModule',
      },
      {
        path: 'characters',
        loadChildren: './modules/characters/characters.module#CharactersModule',
      },
      {
        path: 'planets',
        loadChildren: './modules/planets/planets.module#PlanetsModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
