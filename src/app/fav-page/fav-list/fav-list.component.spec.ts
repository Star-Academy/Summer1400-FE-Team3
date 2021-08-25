import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FavListComponent} from './fav-list.component';

describe('FavListComponent', () => {
  let component: FavListComponent;
  let fixture: ComponentFixture<FavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update playlistIds check favSongs', async () => {
    const temp = [
      {id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd'},
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{name: 'm', id: 2, songs: temp}]);
    await component.ngOnInit();
    expect(component.favSongs).toEqual(temp);
  });

  it('should update playlistIds check playlistIds', async () => {
    const temp = [
      {id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd'},
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{name: 'm', id: 2, songs: temp}]);
    await component.ngOnInit();
    expect(component.playlistIds).toContain(1);
  });

  const songs = [
    {
      id: 1,
      name: 'c',
      artist: 'رضا صادقی',
      lyrics: 'f',
      cover: 'k',
      file: 'd',
    },
    {id: 2, name: 'a', artist: 'l', lyrics: 'f', cover: 'k', file: 'd'},
  ];

  it('should filter songs check filterInput', () => {
    component.favSongs = songs;
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    component.filterInput = 'رضا صادقی';
    expect((component as any)._filterInput).toEqual('رضا صادقی');
  });

  it('should filter songs check hiddenNoResult', () => {
    component.favSongs = songs;
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    component.filterInput = 'رضا صادقی';
    expect(component.hiddenNoResult).toBeTruthy();
  });

  it('should search songs check searchInput', () => {
    component.favSongs = songs;
    component.searchInput = 'رضا صادقی';
    expect((component as any)._searchInput).toEqual('رضا صادقی');
  });

  it('should search songs check favSongs', () => {
    component.favSongs = songs;
    component.searchInput = 'رضا صادقی';
    expect(component.favSongs).toEqual([
      {
        id: 1,
        name: 'c',
        artist: 'رضا صادقی',
        lyrics: 'f',
        cover: 'k',
        file: 'd',
      },
    ]);
  });

  it('show all songs search check searchInput', () => {
    component.searchInput = '';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect((component as any)._searchInput).toEqual('');
  });

  it('show all songs search check hiddenNoResult', () => {
    component.searchInput = '';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenNoResult).toBeTruthy();
  });

  it('fetchFunc', async () => {
    const temp = [
      {id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd'},
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{name: 'm', id: 2, songs: temp}]);
    await component.fetchFunc();
    expect(component.favSongs).toEqual(temp);
  });
});
