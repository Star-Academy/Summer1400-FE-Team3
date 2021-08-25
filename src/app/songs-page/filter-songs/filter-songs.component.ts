import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SongModel } from '../../models';
import { FetchSongDataService } from '../../services/fetch-song-data.service';

@Component({
  selector: 'app-filter-songs',
  templateUrl: './filter-songs.component.html',
  styleUrls: ['./filter-songs.component.scss'],
})
export class FilterSongsComponent implements OnInit {
  @Output() filterSongs: EventEmitter<string> = new EventEmitter<string>();
  public allSongs!: SongModel[];
  public artists: string[] = [];
  @ViewChild('filterValue') filterValue!: ElementRef;

  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async ngOnInit(): Promise<void> {
    this.allSongs = await this.fetchSongDataService.fetchSongs();
    for (const song of this.allSongs) {
      if (!this.artists.includes(song.artist)) this.artists.push(song.artist);
    }
  }
  public sendFilterSongs() {
    this.filterSongs.emit(this.filterValue.nativeElement.value);
  }
}
