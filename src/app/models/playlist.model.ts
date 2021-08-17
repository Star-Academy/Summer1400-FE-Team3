import {SongModel} from "./song.model";

export interface PlaylistModel {
  name:string,
  id:number,
  songs:SongModel[]
}

