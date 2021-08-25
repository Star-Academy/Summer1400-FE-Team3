import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongDetailsComponent } from './song-details.component';
import { SimpleChanges } from '@angular/core';

describe('SongDetailsComponent', () => {
  let component: SongDetailsComponent;
  let fixture: ComponentFixture<SongDetailsComponent>;
  const song = {
    id: 1,
    name: 'c',
    artist: 'd',
    lyrics: 'f',
    cover: 'k',
    file: 'd',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add to favorite check heartSrc', async () => {
    component.song = song;
    component.playlistIds = [2, 3];
    const event = {
      target: {
        src: 'assets/images/heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'addToFavorites'
    ).and.returnValue(true);
    await component.changeIcon(event);
    expect(component.heartSrc).toEqual('assets/images/filled-heart.png');
  });

  it('add to favorite check playlistIds', async () => {
    component.song = song;
    component.playlistIds = [2, 3];
    const event = {
      target: {
        src: 'assets/images/heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'addToFavorites'
    ).and.returnValue(true);
    await component.changeIcon(event);
    expect(component.playlistIds).toEqual([2, 3, 1]);
  });

  it('remove from favorite check heartSrc', async () => {
    component.song = song;
    component.playlistIds = [1, 2, 3];
    const event = {
      target: {
        src: 'assets/images/filled-heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'removeSongFromPlaylist'
    ).and.returnValue(true);
    await component.changeIcon(event);
    expect(component.heartSrc).toEqual('assets/images/heart.png');
  });

  it('remove from favorite check playlistIds', async () => {
    component.song = song;
    component.playlistIds = [1, 2, 3];
    const event = {
      target: {
        src: 'assets/images/filled-heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };
    spyOn(
      (component as any).fetchSongDataService,
      'removeSongFromPlaylist'
    ).and.returnValue(true);
    await component.changeIcon(event);
    expect(component.playlistIds).toEqual([2, 3]);
  });

  it('should update heartSrc check heartSrc', async () => {
    const temp: SimpleChanges = {
      // @ts-ignore
      song: {
        currentValue: {
          id: 1,
          name: 'c',
          artist: 'd',
          lyrics: 'f',
          cover: 'k',
          file: 'd',
        },
      },
    };
    const tempSongArr = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];

    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: tempSongArr }]);
    component.song = song;
    await component.ngOnChanges(temp);
    expect(component.heartSrc).toEqual('assets/images/filled-heart.png');
  });

  it('should update heartSrc check playlistIds', async () => {
    const temp: SimpleChanges = {
      // @ts-ignore
      song: {
        currentValue: {
          id: 1,
          name: 'c',
          artist: 'd',
          lyrics: 'f',
          cover: 'k',
          file: 'd',
        },
      },
    };
    const tempSongArr = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];

    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: tempSongArr }]);
    component.song = {
      id: 1,
      name: 'c',
      artist: 'd',
      lyrics: 'f',
      cover: 'k',
      file: 'd',
    };
    await component.ngOnChanges(temp);
    expect(component.playlistIds).toContain(1);
  });
});
