import { Component, Input } from '@angular/core';
import { Planet } from '../../models/planet/planet.model';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  @Input() planet: Planet;
}
