import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.scss'],
})
export class SongsPageComponent implements OnInit {
  searchSongs: string = '';
  filterSongs: string = '';

  constructor(private router: Router) {
  }

  public async ngOnInit(): Promise<void> {
    if (localStorage.length === 0) await this.router.navigateByUrl('/');
  }

  public async sendSearchSongs(event: any) {
    this.searchSongs = event;
  }

  public async sendFilterSongs(event: any) {
    this.filterSongs = event;
  }
}
