import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { PlanetDetailsComponent } from './pages/planet-details/planet-details.component';

export const routes: Routes = [
  {
    path: '',
    component: PlanetsListComponent,
  },
  {
    path: ':id',
    component: PlanetDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class planetsRoutingModule {}
