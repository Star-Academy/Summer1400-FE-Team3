import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FetchSongDataService} from '../../services/fetch-song-data.service';
import {PlaylistModel, SongModel} from '../../models';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnChanges {
  @Input() public playlistArr!: PlaylistModel[];
  public songs!: SongModel[];
  public playlistIds: number[] = [];

  constructor(private fetchSongDataService: FetchSongDataService) {
  }

  public async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.playlistArr && changes.playlistArr.currentValue) {
      if (this.playlistArr.length === 0) {
        this.playlistArr = await this.fetchSongDataService.fetchPlaylist();
      }
      this.songs = await this.fetchSongDataService.fetchPage(1, 4);
      const tempSongs = [];
      for (const item of this.playlistArr[0].songs) {
        tempSongs.push(item.id);
      }
      this.playlistIds = tempSongs;
    }
  }
}
