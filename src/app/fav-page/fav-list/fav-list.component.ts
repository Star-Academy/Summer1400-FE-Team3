import {Component, Input, OnInit} from '@angular/core';
import {PlaylistModel, SongModel} from "../../models";
import {FetchSongDataService} from "../../services/fetch-song-data.service";

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss']
})
export class FavListComponent implements OnInit {
  public playlistArray!: PlaylistModel[];
  public favSongs: SongModel[]=[];
  public playlistIds: number[] = [];
  public hiddenNoResult = true;

  constructor(private fetchSongDataService: FetchSongDataService) {
  }

  async ngOnInit() {
    this.playlistArray = await this.fetchSongDataService.fetchPlaylist();
    const tempSongs = [];
    this.favSongs=[];
    for (const item of this.playlistArray[0].songs) {
      tempSongs.push(item.id);
      this.favSongs.push(item);
    }
    this.playlistIds = tempSongs;
  }
  private _filterInput!: string;
  @Input() set filterInput(value: string) {
    this._filterInput = value;
    if (this._filterInput !== 'همه' && this._filterInput !== '') {
      this.favSongs = this.favSongs.filter(
        (song) => song.artist === this._filterInput
      );
      if (this.favSongs.length===0) {
        this.hiddenNoResult=false;
      }
    } else {
      this.fetchFunc();
      this.hiddenNoResult=true;
    }
  }

  private _searchInput!: string;
  @Input() set searchInput(value: string) {
    this._searchInput = value;
    if (this._searchInput !== '') {
      this.favSongs = this.favSongs.filter(
        (song) => {
          return (song.artist.includes(this._searchInput) || song.name.includes(this._searchInput) || song.lyrics.includes(this._searchInput))
        }
      );
      if (this.favSongs.length===0) {
        this.hiddenNoResult=false;
      }
    } else {
      this.fetchFunc();
      this.hiddenNoResult=true;

    }
  }
  public async fetchFunc() {
    this.playlistArray = await this.fetchSongDataService.fetchPlaylist();
    this.favSongs=[];
    for (const item of this.playlistArray[0].songs) {
      this.favSongs.push(item);
    }
  }

}
