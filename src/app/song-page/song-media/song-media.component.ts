import {Component, Input} from '@angular/core';
import {SongModel} from '../../models';

@Component({
  selector: 'app-song-media',
  templateUrl: './song-media.component.html',
  styleUrls: ['./song-media.component.scss'],
})
export class SongMediaComponent {
  @Input() song!: SongModel;
}
