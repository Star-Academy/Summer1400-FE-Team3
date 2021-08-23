import { Component, OnInit } from '@angular/core';
import {PlaylistModel, userInfo} from '../models';
import { FetchUserDataService } from '../services/fetch-user-data.service';
import { FetchSongDataService } from '../services/fetch-song-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public playlistArr!: PlaylistModel[];
  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async ngOnInit() {
    let temp:PlaylistModel[];
    temp = await this.fetchSongDataService.fetchPlaylist();
    if (temp.length === 0)
    {
      await this.fetchSongDataService.createFavorites(temp);
      temp = await this.fetchSongDataService.fetchPlaylist();
    }
    this.playlistArr=temp;
  }

}
