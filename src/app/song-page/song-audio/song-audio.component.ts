import {Component, Input} from '@angular/core';
import {SongModel} from '../../models';

@Component({
  selector: 'app-song-audio',
  templateUrl: './song-audio.component.html',
  styleUrls: ['./song-audio.component.scss'],
})
export class SongAudioComponent {
  @Input() song!: SongModel;
}
