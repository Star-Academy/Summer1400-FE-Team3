import { Injectable } from '@angular/core';
import { SendRequestService } from './send-request.service';
import { PlaylistModel, SongModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FetchSongDataService {
  public async fetchPage(
    index: number = 1,
    size: number = 20
  ): Promise<SongModel[]> {
    const details = {
      size: size,
      current: index,
      sorter: 'name',
      desc: true,
    };
    const { songs } = await SendRequestService.sendRequest(
      'https://songs.code-star.ir/song/page',
      true,
      details
    );
    return songs;
  }

  public async fetchPlaylist(): Promise<PlaylistModel[]> {
    const userToken = {
      token: localStorage.getItem('token'),
    };
    return await SendRequestService.sendRequest(
      'https://songs.code-star.ir/playlist/all',
      true,
      userToken
    );
  }

  public async createFavorites(playlistArr: object[]) {
    if (playlistArr.length !== 0) return;
    const playlistInfo = {
      token: localStorage.getItem('token'),
      name: 'مورد علاقه ها',
    };
    await SendRequestService.sendRequest(
      'https://songs.code-star.ir/playlist/create',
      true,
      playlistInfo
    );
  }

  public async fetchFind(phrase: string): Promise<SongModel[]> {
    const details = {
      phrase: phrase,
      count: 20,
      sorter: 'name',
      desc: true,
    };
    const { songs } = await SendRequestService.sendRequest(
      'https://songs.code-star.ir/song/find',
      true,
      details
    );

    return songs;
  }
  public async fetchSongs(): Promise<SongModel[]> {
    const { songs } = await SendRequestService.sendRequest(
      'https://songs.code-star.ir/song/all',
      true
    );
    return songs;
  }

  public async addToFavorites(songId: number): Promise<void> {
    const playlists: object[] = await this.fetchPlaylist();
    // @ts-ignore
    const playlistId = playlists[0].id;
    let details = {
      token: localStorage.getItem('token'),
      playlistId: playlistId,
      songId: songId,
    };
    await SendRequestService.sendRequest(
      'https://songs.code-star.ir/playlist/add-song',
      false,
      details
    );
  }

  public async removeSongFromPlaylist(songId: number): Promise<void> {
    const playlists: object[] = await this.fetchPlaylist();
    // @ts-ignore
    const playlistId = playlists[0].id;
    let details = {
      token: localStorage.getItem('token'),
      playlistId: playlistId,
      songId: songId,
    };
    await SendRequestService.sendRequest(
      'https://songs.code-star.ir/playlist/remove-song',
      false,
      details
    );
  }
  public async fetchSong(songId: number): Promise<SongModel> {
    const { song } = await SendRequestService.sendRequest(
      `https://songs.code-star.ir/song/one/${songId}`,
      true
    );
    return song;
  }
}
