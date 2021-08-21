import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from '../../models';

@Component({
  selector: 'app-song-audio',
  templateUrl: './song-audio.component.html',
  styleUrls: ['./song-audio.component.scss'],
})
export class SongAudioComponent implements OnInit {
  @Input() song!: SongModel;

  constructor() {
  }
  ngOnInit() {
  }

}
