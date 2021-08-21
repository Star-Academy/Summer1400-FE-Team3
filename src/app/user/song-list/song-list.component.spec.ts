import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListComponent } from './song-list.component';
import {FetchSongDataService} from "../../services/fetch-song-data.service";

describe('SongListComponent', () => {
  let component: SongListComponent;
  let fixture: ComponentFixture<SongListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListComponent ],
      providers:[FetchSongDataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('should update playlistIds', async () => {
    const temp=[{id:1,name:'c',artist:'d',lyrics:'f',cover:'k',file:'d'}];
    spyOn((component as any).fetchSongDataService,"fetchPage").and.returnValue(temp);
    spyOn((component as any).fetchSongDataService,"fetchPlaylist").and.returnValue([{name:'m',id:2,songs:temp}]);
    await component.ngOnInit();
    expect(component.songs).toEqual(temp)
    expect(component.playlistIds).toContain(1);
  });
});
