import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FetchSongDataService } from 'src/app/services/fetch-song-data.service';
import { SongModel } from '../../models';

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss'],
})
export class SearchSongsComponent implements OnInit {
  searchInput = document.querySelector('#search');
  @ViewChild('search') search!: ElementRef;
  @Output() searchSongs: EventEmitter<string> = new EventEmitter<string>();
  constructor(private fetchSongDataService: FetchSongDataService) {}

  ngOnInit(): void {}
  public async searchFunction() {
    const searchValue = this.search.nativeElement.value;

    // if (searchValue === "") {
    //   //document.getElementById("noResult").style.display = "none";
    //   pageNumber = 1;
    //   next.style.display = "inline";
    //   await makeList();
    //   return;
    // }
    // await searchFunction(searchValue);
    this.searchSongs.emit(searchValue);
  }
}
