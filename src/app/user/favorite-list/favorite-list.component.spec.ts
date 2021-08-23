import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteListComponent } from './favorite-list.component';
import { SimpleChanges } from '@angular/core';

describe('FavoriteListComponent', () => {
  let component: FavoriteListComponent;
  let fixture: ComponentFixture<FavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update songs', async () => {
    const temp = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];

    component.playlistArr = [{ name: 'm', id: 2, songs: temp }];
    const change: SimpleChanges = {
      // @ts-ignore
      playlistArr: { currentValue: [{ name: 'm', id: 2, songs: temp }] },
    };

    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: temp }]);

    await component.ngOnChanges(change);
    expect(component.songs).toEqual(temp);
    expect(component.playlistIds).toContain(1);
  });
});
