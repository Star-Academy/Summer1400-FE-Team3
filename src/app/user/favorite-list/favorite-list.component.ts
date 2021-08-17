import { Component, OnInit } from '@angular/core';
import { FetchUserDataService } from '../../services/fetch-user-data.service';
import { FetchSongDataService } from '../../services/fetch-song-data.service';
import { SongModel, PlaylistModel } from '../../models';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  public playlistArr!: PlaylistModel[];
  public songs: SongModel[] = [];
  public FILLED_HEART = '../assets/images/filled-heart.png';
  public playlistIds!: number[];
  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async ngOnInit() {
    this.playlistArr = await this.fetchSongDataService.fetchPlaylist();
    await this.fetchSongDataService.createFavorites(this.playlistArr);
    if (this.playlistArr.length === 0)
      this.playlistArr = await this.fetchSongDataService.fetchPlaylist();
    // @ts-ignore
    for (let i = 0; i < 4 && i < this.playlistArr[0].songs.length; i++) {
      // @ts-ignore
      this.songs.push(this.playlistArr[0].songs[i].rest);
    }

    const tempSongs = [];

    for (const item of this.playlistArr[0].songs) {
      tempSongs.push(item.rest.id);
    }
    this.playlistIds = tempSongs;
  }
}
