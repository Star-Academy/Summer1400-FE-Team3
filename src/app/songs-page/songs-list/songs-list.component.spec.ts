import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SongsListComponent} from './songs-list.component';

describe('SongsListComponent', () => {
  let component: SongsListComponent;
  let fixture: ComponentFixture<SongsListComponent>;
  const allSongs = [
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
      {id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd'},
    ];
    spyOn((component as any).fetchSongDataService, 'fetchPage').and.returnValue(
      true
    );
    spyOn(
      (component as any).fetchSongDataService,
      'fetchSongs'
    ).and.returnValue(true);
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{name: 'm', id: 2, songs: temp}]);
    await component.ngOnInit();
    expect(component.playlistIds).toContain(1);
  });

  it('should filter songs check filterInput', () => {
    component.allSongs = allSongs;
    component.filterInput = 'رضا صادقی';
    expect((component as any)._filterInput).toEqual('رضا صادقی');
  });

  it('should filter songs check songs', () => {
    component.allSongs = allSongs;
    component.filterInput = 'رضا صادقی';
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
  });

  it('should filter songs check hiddenNext', () => {
    component.allSongs = allSongs;
    component.filterInput = 'رضا صادقی';
    expect(component.hiddenNext).toBeTruthy();
  });

  it('should filter songs check hiddenPrev', () => {
    component.allSongs = allSongs;
    component.filterInput = 'رضا صادقی';
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('show all songs check searchInput', () => {
    component.filterInput = 'همه';
    expect((component as any)._filterInput).toEqual('همه');
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
  });

  it('show all songs check pageNumber', () => {
    component.filterInput = 'همه';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.pageNumber).toBe(1);
  });

  it('show all songs check hiddenNext', () => {
    component.filterInput = 'همه';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenNext).toBeFalsy();
  });

  it('show all songs check hiddenPrev', () => {
    component.filterInput = 'همه';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('should search songs check searchInput', () => {
    component.searchInput = 'رضا صادقی';
    expect((component as any)._searchInput).toEqual('رضا صادقی');
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
  });

  it('should search songs check hiddenNext', () => {
    component.searchInput = 'رضا صادقی';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenNext).toBeTruthy();
  });

  it('should search songs check hiddenPrev', () => {
    component.searchInput = 'رضا صادقی';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('show all songs search check searchInput', () => {
    component.searchInput = '';
    expect((component as any)._searchInput).toEqual('');
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
  });

  it('show all songs search check pageNumber', () => {
    component.searchInput = '';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.pageNumber).toBe(1);
  });

  it('show all songs search check hiddenNext', () => {
    component.searchInput = '';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenNext).toBeFalsy();
  });

  it('show all songs search check hiddenPrev', () => {
    component.searchInput = '';
    // @ts-ignore
    spyOn(component, 'fetchFunc').and.callFake(() => true);
    expect(component.hiddenPrev).toBeTruthy();
  });

  it('fetchFunc', () => {
    spyOn((component as any).fetchSongDataService, 'fetchFind').and.returnValue(
      allSongs
    );
    component.fetchFunc('رضا صادقی');
    expect(component.hiddenNoResult).toBeTruthy();
  });

  it('next page func check songs', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callThrough();
    // @ts-ignore
    spyOn(component, 'checkEnd').and.callFake(() => true);
    component.nextPage();
    expect(component.songs).toEqual([]);
  });

  it('next page func check hiddenPrev', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callThrough();
    // @ts-ignore
    spyOn(component, 'checkEnd').and.callFake(() => true);
    component.nextPage();
    expect(component.hiddenPrev).toBeFalsy();
  });

  it('check end func', () => {
    spyOn((component as any).fetchSongDataService, 'fetchPage').and.returnValue(
      allSongs
    );
    component.checkEnd();
    expect(component.hiddenNext).toBeFalsy();
  });

  it('prev page func check songs', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callFake(() => true);
    // @ts-ignore
    spyOn(component, 'checkEnd').and.callFake(() => true);
    component.pageNumber = 2;
    component.previousPage();
    expect(component.songs).toEqual([]);
  });

  it('prev page func check hiddenPrev', () => {
    spyOn(
      (component as any).fetchSongDataService,
      'fetchPage'
    ).and.callFake(() => true);
    // @ts-ignore
    spyOn(component, 'checkEnd').and.callFake(() => true);
    component.pageNumber = 2;
    component.previousPage();
    expect(component.hiddenPrev).toBeTruthy();
  });
});
