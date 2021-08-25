import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.scss'],
})
export class FavPageComponent implements OnInit {
  public searchSongs: string = '';
  public filterSongs: string = '';

  constructor(private router: Router) {}

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
