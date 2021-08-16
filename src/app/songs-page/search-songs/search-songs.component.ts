import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SongModel} from "../../models";

@Component({
  selector: 'app-search-songs',
  templateUrl: './search-songs.component.html',
  styleUrls: ['./search-songs.component.scss']
})
export class SearchSongsComponent implements OnInit {
  searchInput=document.querySelector("#search");
  @ViewChild('search') search: any;
  @Output() searchSongs: EventEmitter<SongModel[]> = new EventEmitter<SongModel[]>();
  constructor() { }

  ngOnInit(): void {
  }
  public searchFunction(){
    const searchValue = this.search.value;
    console.log(searchValue)
    // if (searchValue === "") {
    //   document.getElementById("noResult").style.display = "none";
    //   pageNumber = 1;
    //   next.style.display = "inline";
    //   await makeList();
    //   return;
    // }
    // await searchFunction(searchValue);
  }
}
