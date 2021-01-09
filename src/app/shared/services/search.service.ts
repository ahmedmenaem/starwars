import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public onSearch$ = new Subject<string>();

  public onSearchTextChange(text: string) {
    this.onSearch$.next(text);
  }
}
