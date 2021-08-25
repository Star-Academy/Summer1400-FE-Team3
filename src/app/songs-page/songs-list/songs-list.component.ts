import {Component, Input, OnInit} from '@angular/core';
import {SongModel, PlaylistModel} from '../../models';
import {FetchSongDataService} from '../../services/fetch-song-data.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss'],
})
export class SongsListComponent implements OnInit {
  public pageNumber: number = 1;
  public hiddenNext = false;
  public hiddenPrev = true;
  public hiddenNoResult = true;
  public songs!: SongModel[];
  public allSongs: SongModel[] = [];
  public playlistArray!: PlaylistModel[];
  public playlistIds: number[] = [];
  private _filterInput!: string;
  private _searchInput!: string;

  constructor(private fetchSongDataService: FetchSongDataService) {
  }

  public async ngOnInit(): Promise<void> {
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
    this.allSongs = await this.fetchSongDataService.fetchSongs();
    const tempSongs = [];
    this.playlistArray = await this.fetchSongDataService.fetchPlaylist();
    for (const item of this.playlistArray[0].songs) {
      tempSongs.push(item.id);
    }
    this.playlistIds = tempSongs;
  }

  @Input() set filterInput(value: string) {
    this._filterInput = value;
    if (this._filterInput !== 'همه' && this._filterInput !== '') {
      this.songs = this.allSongs.filter(
        (song) => song.artist === this._filterInput
      );
      this.hiddenNext = true;
      this.hiddenPrev = true;
    } else {
      this.pageNumber = 1;
      this.hiddenNext = false;
      this.hiddenNoResult = true;
      this.fetchFunc('');
    }
  }

  @Input() set searchInput(value: string) {
    this._searchInput = value;
    if (this._searchInput !== '') {
      this.fetchFunc(this._searchInput);
      this.hiddenNext = true;
      this.hiddenPrev = true;
    } else {
      this.pageNumber = 1;
      this.hiddenNext = false;
      this.hiddenNoResult = true;
      this.fetchFunc(this._searchInput);
    }
  }

  public async fetchFunc(value: string): Promise<void> {
    if (value !== '') {
      this.songs = await this.fetchSongDataService.fetchFind(this._searchInput);
      if (this.songs.length === 0) {
        this.hiddenNoResult = false;
      } else {
        this.hiddenNoResult = true;
      }
    } else {
      this.songs = await this.fetchSongDataService.fetchPage(
        this.pageNumber,
        20
      );
    }
  }

  public async nextPage(): Promise<void> {
    this.songs = [];
    this.pageNumber++;
    this.hiddenPrev = false;
    await this.checkEnd();
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }

  public async checkEnd(): Promise<void> {
    const pageArr = await this.fetchSongDataService.fetchPage(
      this.pageNumber + 1,
      20
    );
    this.hiddenNext = pageArr.length === 0;
  }

  public async previousPage(): Promise<void> {
    this.songs = [];
    this.pageNumber--;
    if (this.pageNumber === 1) this.hiddenPrev = true;
    await this.checkEnd();
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }
}
