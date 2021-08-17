import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from "../../models";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  @Input() song!: SongModel;

  constructor() { }

  ngOnInit(): void {
  }

}
