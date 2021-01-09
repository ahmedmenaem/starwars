import { Component } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  handleSearch(e) {
    this.searchService.onSearchTextChange(e.target.value);
  }
}
