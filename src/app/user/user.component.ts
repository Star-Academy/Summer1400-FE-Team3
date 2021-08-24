import { Component, OnInit } from '@angular/core';
import {PlaylistModel, userInfo} from '../models';
import { FetchUserDataService } from '../services/fetch-user-data.service';
import { FetchSongDataService } from '../services/fetch-song-data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public playlistArr!: PlaylistModel[];
  constructor(private fetchSongDataService: FetchSongDataService,
              private router:Router) {}

  public async ngOnInit() {
    if(localStorage.length===0)
      await this.router.navigateByUrl("/")
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
