import {Component, OnInit} from '@angular/core';
import {SongModel} from '../../models';
import {FetchSongDataService} from 'src/app/services/fetch-song-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song-audio',
  templateUrl: './song-audio.component.html',
  styleUrls: ['./song-audio.component.scss'],
})
export class SongAudioComponent implements OnInit {
  song!: SongModel;

  constructor(
    private fetchSongDataService: FetchSongDataService,
    private rout: ActivatedRoute
  ) {
      this.init();
  }
  async init(){
    this.song = await this.fetchSongDataService.fetchSong(
      +this.rout.snapshot.params['id']
    );
  }
  ngOnInit() {
  }

}
