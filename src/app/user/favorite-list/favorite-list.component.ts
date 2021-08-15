import { Component, OnInit } from '@angular/core';
import {FetchUserDataService} from "../../services/fetch-user-data.service";
import {FetchSongDataService} from "../../services/fetch-song-data.service";
import {SongModel} from "../../models";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  public playlistArr!:object[];
  public songs!:SongModel[];
  constructor(private fetchSongDataService:FetchSongDataService) { }

  public async ngOnInit(){
    this.playlistArr=await this.fetchSongDataService.fetchPlaylist();
    await this.fetchSongDataService.createFavorites(this.playlistArr);
    if (this.playlistArr.length===0)
      this.playlistArr=await this.fetchSongDataService.fetchPlaylist();
    // @ts-ignore
    this.songs=this.playlistArr[0].songs;
  }

}
