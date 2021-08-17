import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.scss'],
})
export class FavPageComponent implements OnInit {
  searchSongs: string = '';
  filterSongs: string = '';

  constructor() {}

  ngOnInit(): void {}
  public async sendSearchSongs(event: any) {
    this.searchSongs = event;
  }
  public async sendFilterSongs(event: any) {
    this.filterSongs = event;
  }
}
