import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { planetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './pages/planets-list/planets-list.component';
import { PlanetDetailsComponent } from './pages/planet-details/planet-details.component';
import { PlanetAdapter } from './models/planet/planet.adapter';
import { PlanetsService } from './services/planets/planets.service';
import { PlanetComponent } from './components/planet/planet.component';
import { LoaderModule } from '../../shared/components/loader/loader.module';

@NgModule({
  declarations: [PlanetsListComponent, PlanetDetailsComponent, PlanetComponent],
  imports: [CommonModule, planetsRoutingModule, HttpClientModule, LoaderModule],
  providers: [PlanetAdapter, PlanetsService],
})
export class PlanetsModule {}
