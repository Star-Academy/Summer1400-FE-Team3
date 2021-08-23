import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SongModel, PlaylistModel } from '../../models';
import {FetchSongDataService} from "../../services/fetch-song-data.service";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit,OnChanges{
  @Input() public playlistArr!: PlaylistModel[];
  public songs: SongModel[] = [];
  public playlistIds!: number[];
  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async ngOnInit() {

  }

  async ngOnChanges(changes: SimpleChanges) {
    if(changes.playlistArr && changes.playlistArr.currentValue)
    {
      if (this.playlistArr.length === 0)
      {
        this.playlistArr = await this.fetchSongDataService.fetchPlaylist();
      }
      for (let i = 0; i < 4 && i < this.playlistArr[0].songs.length; i++) {
        this.songs.push(this.playlistArr[0].songs[i]);
      }
      const tempSongs = [];
      for (const item of this.playlistArr[0].songs) {
        tempSongs.push(item.id);
      }
      this.playlistIds = tempSongs;
    }

  }
}
