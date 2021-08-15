import { Injectable } from '@angular/core';
import {SendRequestService} from "./send-request.service";
import {SongModel} from "../models"

@Injectable({
  providedIn: 'root'
})
export class FetchSongDataService {

  constructor() {
  }

  public async fetchPage(index: number = 1, size: number = 20): Promise<SongModel[]> {
    const details = {
      size: size,
      current: index,
      sorter: "name",
      desc: true,
    };
    const {songs} = await SendRequestService.sendRequest('https://songs.code-star.ir/song/page', details);
    return songs;
  }

  public async fetchPlaylist(): Promise<object[]> {
    const userToken = {
      token: localStorage.getItem("token"),
    };
    return await SendRequestService.sendRequest('https://songs.code-star.ir/playlist/all', userToken);
  }

  public async createFavorites(playlistArr: object[]) {
    if (playlistArr.length !== 0) return;
    const playlistInfo = {
      token: localStorage.getItem("token"),
      name: "مورد علاقه ها",
    };
    await SendRequestService.sendRequest('https://songs.code-star.ir/playlist/create', playlistInfo);
  }
}
