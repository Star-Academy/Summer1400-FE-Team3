import {Component, Input, OnInit} from '@angular/core';
import {PlaylistModel, SongModel} from "../models";
import {FetchSongDataService} from "../services/fetch-song-data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() song!: SongModel;
   HEART = "../assets/images/heart.png";
   FILLED_HEART = "../assets/images/filled-heart.png";
   public heartSrc!:string;
  @Input() isFav!:boolean;
  @Input() playlistArray?:PlaylistModel[];
  public playlistIds:number[]=[];
  // private _playlistIds: number[]=[];
  // @Input() set playlistIds(value:number[]){
  //   this._playlistIds=value;
  //   console.log(this._playlistIds[0])
  //   if (this._playlistIds.includes(this.song.id))
  //     this.heartSrc=this.FILLED_HEART;
  //   else
  //     this.heartSrc=this.HEART;
  // }
  constructor(private fetchSongDataService:FetchSongDataService) { }

  ngOnInit(): void {
    if (this.isFav)
      this.heartSrc=this.FILLED_HEART;
    else {
      console.log(this.playlistArray)
      // @ts-ignore
      for (const item of this.playlistArray[0].songs) {
        this.playlistIds.push(item.rest.id);
      }
    }
  }
  public async changeIcon(event:any){
    if(event.target.getAttribute("src")===this.HEART)
    {
      this.heartSrc=this.FILLED_HEART;
      await this.fetchSongDataService.addToFavorites(this.song.id);
    }
    else
      this.heartSrc=this.HEART;
  }

}
