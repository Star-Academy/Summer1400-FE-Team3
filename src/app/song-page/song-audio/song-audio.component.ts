import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SongModel } from '../../models';
import { Track } from 'ngx-audio-player';
import { FetchSongDataService } from 'src/app/services/fetch-song-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-audio',
  templateUrl: './song-audio.component.html',
  styleUrls: ['./song-audio.component.scss'],
})
export class SongAudioComponent implements OnInit {
  //@Input() songFile!: string;
  song!: SongModel;

  private _songFile!: string;

  @Input() set songFile(value: string) {
    console.log(value);
    this._songFile = value;
  }
  get songFile(): string {
    return this._songFile;
  }

  public msaapPlaylist!: Track[];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = false;
  pageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;

  constructor(
    private fetchSongDataService: FetchSongDataService,
    private rout: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.msaapPlaylist = [
      {
        title: '',
        // artist: this.song.artist,
        link: 'https://songs.code-star.ir/files/songs/Naser-Zeynali-Ye-Khabari-Shode.mp3',
        // duration: 'Audio One Duration in seconds',
      },
    ];

    this.song = await this.fetchSongDataService.fetchSong(
      +this.rout.snapshot.params['id']
    );
    console.log(this.song);
  }

  // ngOnChanges(change: any): void {
  //   if (change.song && change.songFile.currentValue) {
  //     console.log('onchange');

  //     this.msaapPlaylist = [
  //       {
  //         title: this.song.name,
  //         artist: this.song.artist,
  //         link: songObj.file,
  //         // duration: 'Audio One Duration in seconds',
  //       },
  //     ];
  //   }
  // }
}
