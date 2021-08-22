import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FavListComponent} from './fav-list.component';

describe('FavListComponent', () => {
  let component: FavListComponent;
  let fixture: ComponentFixture<FavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update playlistIds', async () => {
    const temp = [
      {id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd'},
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{name: 'm', id: 2, songs: temp}]);
    await component.ngOnInit();
    expect(component.favSongs).toEqual(temp);
    expect(component.playlistIds).toContain(1);
  });

  it('should filter songs', () => {
    component.favSongs = [
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
    spyOn(component, "fetchFunc").and.callThrough();
    component.filterInput = 'رضا صادقی';
    expect((component as any)._filterInput).toEqual('رضا صادقی');
    expect(component.hiddenNoResult).toBeTruthy();

  });

  it('should search songs', () => {
    component.favSongs = [
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
    component.searchInput = 'رضا صادقی';
    expect((component as any)._searchInput).toEqual('رضا صادقی');
    expect(component.favSongs).toEqual([
      {
        id: 1,
        name: 'c',
        artist: 'رضا صادقی',
        lyrics: 'f',
        cover: 'k',
        file: 'd',
      }
    ]);
  });

  it('show all songs search', () => {

    component.searchInput = '';
    spyOn(component, 'fetchFunc').and.callThrough();
    expect((component as any)._searchInput).toEqual('');
    expect(component.hiddenNoResult).toBeTruthy();
  });

  it('fetchFunc', async () => {
    const temp = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: temp }]);
    await component.fetchFunc();
    expect(component.favSongs).toEqual(temp);
  });

});
