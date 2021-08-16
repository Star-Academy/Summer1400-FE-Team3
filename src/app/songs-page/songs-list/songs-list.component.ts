import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SongModel } from '../../models';
import { FetchSongDataService } from '../../services/fetch-song-data.service';

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

  @Input() filterInput!: string;

  private _searchInput!: string;
  @Input() set searchInput(value: string) {
    this._searchInput = value;
    if (this._searchInput !== '') {
      this.fetchSearch(this._searchInput);
      this.hiddenNext = true;
      this.hiddenPrev = true;
    } else {
      this.pageNumber = 1;
      this.hiddenNext = false;
      this.hiddenNoResult = true;
      this.fetchSearch(this._searchInput);
    }
  }

  public async fetchSearch(value: string) {
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

  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async ngOnInit() {
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }

  async nextPage() {
    this.songs = [];
    this.pageNumber++;
    await this.checkEnd();
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }
  async checkEnd() {
    const pageArr = await this.fetchSongDataService.fetchPage(
      this.pageNumber + 1,
      20
    );
    this.hiddenNext = pageArr.length === 0;
  }

  async previousPage() {
    this.songs = [];
    this.pageNumber--;
    await this.checkEnd();

    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }
}
