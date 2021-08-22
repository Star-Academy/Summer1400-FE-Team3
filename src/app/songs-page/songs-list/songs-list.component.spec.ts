import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListComponent } from './songs-list.component';

describe('SongsListComponent', () => {
  let component: SongsListComponent;
  let fixture: ComponentFixture<SongsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update playlistIds', async () => {
    const temp = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callThrough();
    spyOn(
      (component as any).fetchSongDataService,
      'fetchSongs'
    ).and.callThrough();
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: temp }]);
    await component.ngOnInit();

    expect(component.playlistIds).toContain(1);
  });

  it('should filter songs', () => {
    component.allSongs = [
      {
        id: 1,
        name: 'c',
        artist: 'رضا صادقی',
        lyrics: 'f',
        cover: 'k',
        file: 'd',
      },
      { id: 2, name: 'a', artist: 'l', lyrics: 'f', cover: 'k', file: 'd' },
    ];
    component.filterInput = 'رضا صادقی';
    expect((component as any)._filterInput).toEqual('رضا صادقی');

    expect(component.songs).toEqual([
      {
        id: 1,
        name: 'c',
        artist: 'رضا صادقی',
        lyrics: 'f',
        cover: 'k',
        file: 'd',
      },
    ]);
    expect(component.hiddenNext).toBeTruthy();
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('show all songs', () => {
    component.filterInput = 'همه';
    expect((component as any)._filterInput).toEqual('همه');
    spyOn(component, 'fetchFunc').and.callThrough();
    expect(component.pageNumber).toBe(1);
    expect(component.hiddenNext).toBeFalsy();
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('should search songs', () => {
    component.searchInput = 'رضا صادقی';
    expect((component as any)._searchInput).toEqual('رضا صادقی');
    spyOn(component, 'fetchFunc').and.callThrough();

    expect(component.hiddenNext).toBeTruthy();
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('show all songs search', () => {
    component.searchInput = '';
    expect((component as any)._searchInput).toEqual('');
    spyOn(component, 'fetchFunc').and.callThrough();
    expect(component.pageNumber).toBe(1);
    expect(component.hiddenNext).toBeFalsy();
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('fetchFunc', () => {
    spyOn((component as any).fetchSongDataService, 'fetchFind').and.returnValue(
      [
        {
          id: 1,
          name: 'c',
          artist: 'رضا صادقی',
          lyrics: 'f',
          cover: 'k',
          file: 'd',
        },
        { id: 2, name: 'a', artist: 'l', lyrics: 'f', cover: 'k', file: 'd' },
      ]
    );
    component.fetchFunc('رضا صادقی');

    expect(component.hiddenNoResult).toBeTruthy();
  });

  it('next page func', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callThrough();
    spyOn(component, 'checkEnd').and.callThrough();
    component.nextPage();
    expect(component.songs).toEqual([]);
    expect(component.hiddenPrev).toBeFalsy();
  });

  it('check end func', () => {
    spyOn((component as any).fetchSongDataService, 'fetchPage').and.returnValue(
      [
        {
          id: 1,
          name: 'c',
          artist: 'رضا صادقی',
          lyrics: 'f',
          cover: 'k',
          file: 'd',
        },
        { id: 2, name: 'a', artist: 'l', lyrics: 'f', cover: 'k', file: 'd' },
      ]
    );

    component.checkEnd();

    expect(component.hiddenNext).toBeFalsy();
  });

  it('prev page func', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callThrough();
    spyOn(component, 'checkEnd').and.callThrough();
    component.pageNumber = 2;
    component.previousPage();
    expect(component.songs).toEqual([]);
    expect(component.hiddenPrev).toBeTruthy();
  });
});
