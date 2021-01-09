import { Component, Input } from '@angular/core';
import { Character } from '../../models/character/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharcterComponent {
  @Input() character: Character;
}
