import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';


@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss'],
})
export class SearchSongsComponent implements OnInit {
  @ViewChild('search') search!: ElementRef;
  @Output() searchSongs: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  public async searchFunction() {
    const searchValue = this.search.nativeElement.value;
    this.searchSongs.emit(searchValue);
  }
}
