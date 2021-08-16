import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SongModel} from "../../models";

@Component({
  selector: 'app-filter-songs',
  templateUrl: './filter-songs.component.html',
  styleUrls: ['./filter-songs.component.scss']
})
export class FilterSongsComponent implements OnInit {
  @Output() filterSongs: EventEmitter<SongModel[]> = new EventEmitter<SongModel[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
