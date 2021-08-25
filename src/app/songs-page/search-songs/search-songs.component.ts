import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss'],
})
export class SearchSongsComponent {
  @ViewChild('search') search!: ElementRef;
  @Output() searchSongs: EventEmitter<string> = new EventEmitter<string>();

  public async searchFunction() {
    const searchValue = this.search.nativeElement.value;
    this.searchSongs.emit(searchValue);
  }
}
