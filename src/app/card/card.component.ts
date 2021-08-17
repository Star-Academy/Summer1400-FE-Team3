import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { PlaylistModel, SongModel } from '../models';
import { FetchSongDataService } from '../services/fetch-song-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() song!: SongModel;
  HEART = '../assets/images/heart.png';
  FILLED_HEART = '../assets/images/filled-heart.png';
  public heartSrc!: string;

  @Input() playlistIds!: number[];
  @Output() playlistIdsChange = new EventEmitter<number[]>();
  constructor(private fetchSongDataService: FetchSongDataService) {}

  ngOnInit(): void {}

  ngOnChanges(change: any): void {
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
      this.playlistIds.forEach((element, index) => {
        if (element === this.song.id) delete this.playlistIds[index];
      });
      this.playlistIdsChange.emit(this.playlistIds);
    }
  }
}
