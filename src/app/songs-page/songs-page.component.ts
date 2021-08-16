import { Component, OnInit } from '@angular/core';
import { SongModel, userInfo } from '../models';
import { FetchUserDataService } from '../services/fetch-user-data.service';
import { UserComponent } from '../user';
import { FetchSongDataService } from '../services/fetch-song-data.service';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.scss'],
})
export class SongsPageComponent implements OnInit {
  searchSongs: string = '';
  filterSongs: string = '';
  constructor() {}
  public async ngOnInit() {}

  public async sendSearchSongs(event: any) {
    this.searchSongs = event;
  }
  public async sendFilterSongs(event: any) {
    this.filterSongs = event;
  }
}
