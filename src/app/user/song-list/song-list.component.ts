import { Component, OnInit } from '@angular/core';
import {FetchSongDataService} from "../../services/fetch-song-data.service";
import {PlaylistModel, SongModel} from "../../models";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  public songs!:SongModel[];
  public playlistArray !: PlaylistModel[];
  public playlistIds : number[]=[];

  constructor(private fetchSongDataService:FetchSongDataService) { }

  public async ngOnInit(){
    this.songs=await this.fetchSongDataService.fetchPage(1,4);
    this.playlistArray=await this.fetchSongDataService.fetchPlaylist();
  }

}
