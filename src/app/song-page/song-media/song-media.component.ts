import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from "../../models";

@Component({
  selector: 'app-song-media',
  templateUrl: './song-media.component.html',
  styleUrls: ['./song-media.component.scss']
})
export class SongMediaComponent implements OnInit {
  @Input() song!: SongModel;
  constructor() { }

  ngOnInit(): void {
  }

}
