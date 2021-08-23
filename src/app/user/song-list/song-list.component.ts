import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FetchSongDataService} from '../../services/fetch-song-data.service';
import {PlaylistModel, SongModel} from '../../models';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit, OnChanges {
  public songs!: SongModel[];
  @Input() public playlistArr!: PlaylistModel[];
  public playlistIds: number[] = [];

  constructor(private fetchSongDataService: FetchSongDataService) {
  }

  public async ngOnInit() {

  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.playlistArr && changes.playlistArr.currentValue) {
      if (this.playlistArr.length === 0)
      {
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
