import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDetailsComponent } from './song-details.component';

describe('SongDetailsComponent', () => {
  let component: SongDetailsComponent;
  let fixture: ComponentFixture<SongDetailsComponent>;

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

  it('should update playlistIds', async () => {
    const temp = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
    ];

    spyOn(
      (component as any).fetchSongDataService,
      'fetchPlaylist'
    ).and.returnValue([{ name: 'm', id: 2, songs: temp }]);
    await component.ngOnInit();

    expect(component.playlistIds).toContain(1);
  });

  fit('change icon func', async () => {
    component.song = {
      id: 1,
      name: 'c',
      artist: 'd',
      lyrics: 'f',
      cover: 'k',
      file: 'd',
    };

    component.playlistIds = [2, 3];

    const event = {
      target: {
        src: '../assets/images/heart.png',
        getAttribute(src: string) {
          return this.src;
        },
      },
    };

    spyOn(
      (component as any).fetchSongDataService,
      'addToFavorites'
    ).and.callThrough();

    await component.changeIcon(event);

    expect(component.heartSrc).toEqual('../assets/images/filled-heart.png');
    expect(component.playlistIds).toEqual([2, 3, 1]);
  });
});
