import { Component, OnInit } from '@angular/core';

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
