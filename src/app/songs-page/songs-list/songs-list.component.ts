import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SongModel} from "../../models";
import {FetchSongDataService} from "../../services/fetch-song-data.service";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  public songs!: SongModel[];
  @Input() searchInput!: SongModel[];
  @Input() filterInput!: SongModel[];
  public pageNumber: number = 1;
  public hiddenNext=false;

  constructor(private fetchSongDataService: FetchSongDataService) {
  }

  public async ngOnInit() {
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }

  async nextPage() {
    this.songs = [];
    this.pageNumber++;
    await this.checkEnd();
    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }
  async checkEnd(){
    const pageArr = await this.fetchSongDataService.fetchPage(this.pageNumber + 1, 20);
     this.hiddenNext=pageArr.length === 0;
  }

  async previousPage() {
    this.songs = [];
    this.pageNumber--;
    await this.checkEnd();

    this.songs = await this.fetchSongDataService.fetchPage(this.pageNumber, 20);
  }
}
