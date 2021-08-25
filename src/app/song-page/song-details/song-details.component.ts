import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlaylistModel, SongModel } from '../../models';
import { FetchSongDataService } from '../../services/fetch-song-data.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnChanges {
  @Input() song!: SongModel;
  public playlistArray!: PlaylistModel[];
  public playlistIds: number[] = [];
  public heartSrc: string = '';
  public HEART = 'assets/images/heart.png';
  public FILLED_HEART = 'assets/images/filled-heart.png';
  constructor(private fetchSongDataService: FetchSongDataService) {}

  public async changeIcon(event: any) {
    if (event.target.getAttribute('src') === this.HEART) {
      this.heartSrc = this.FILLED_HEART;
      await this.fetchSongDataService.addToFavorites(this.song.id);
      this.playlistIds.push(this.song.id);
    } else {
      this.heartSrc = this.HEART;
      await this.fetchSongDataService.removeSongFromPlaylist(this.song.id);
      const index = this.playlistIds.indexOf(this.song.id, 0);
      if (index > -1) {
        this.playlistIds.splice(index, 1);
      }
    }
  }

  public async ngOnChanges(changes: SimpleChanges) {
    if (changes.song && changes.song.currentValue) {
      this.playlistArray = await this.fetchSongDataService.fetchPlaylist();
      for (const item of this.playlistArray[0].songs) {
        this.playlistIds.push(item.id);
      }

      if (this.playlistIds.includes(this.song.id)) {
        this.heartSrc = this.FILLED_HEART;
      } else {
        this.heartSrc = this.HEART;
      }
    }
  }
}
