import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

import { SongModel } from '../models';
import { FetchSongDataService } from '../services/fetch-song-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() song!: SongModel;
  HEART = 'assets/images/heart.png';
  FILLED_HEART = 'assets/images/filled-heart.png';
  public heartSrc!: string;

  @Input() playlistIds!: number[];
  @Output() playlistIdsChange = new EventEmitter<number[]>();
  constructor(
    private fetchSongDataService: FetchSongDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    if (change.playlistIds && change.playlistIds.currentValue) {
      if (this.playlistIds.includes(this.song.id)) {
        this.heartSrc = this.FILLED_HEART;
      } else this.heartSrc = this.HEART;
    }
  }

  public async changeIcon(event: any) {
    if (event.target.getAttribute('src') === this.HEART) {
      this.heartSrc = this.FILLED_HEART;
      await this.fetchSongDataService.addToFavorites(this.song.id);
      this.playlistIds.push(this.song.id);
      this.playlistIdsChange.emit(this.playlistIds);
    } else {
      this.heartSrc = this.HEART;
      await this.fetchSongDataService.removeSongFromPlaylist(this.song.id);
      const index = this.playlistIds.indexOf(this.song.id, 0);
      if (index > -1) {
        this.playlistIds.splice(index, 1);
      }
      this.playlistIdsChange.emit(this.playlistIds);
    }
  }
  public async goToSongPage() {
    await this.router.navigateByUrl(`/song/${this.song.id}`);
  }
}
