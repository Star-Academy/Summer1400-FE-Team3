import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListComponent } from './song-list.component';
import {FetchSongDataService} from "../../services/fetch-song-data.service";

fdescribe('SongListComponent', () => {
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
  it('should update playlistIds', function () {
    spyOn((component as any).fetchSongDataService,"fetchPage").and.returnValue([{id:1,name:'c',artist:'d',lyrics:'f',cover:'k',file:'d'}]);
    spyOn((component as any).fetchSongDataService,"fetchPlaylist").and.returnValue([{name:'m',id:2,songs:{id:1,name:'c',artist:'d',lyrics:'f',cover:'k',file:'d'}}]);
    component.ngOnInit();
    expect((component as any).fetchSongDataService.fetchPlaylist).toHaveBeenCalled();
    expect(component.songs).toEqual([{id:1,name:'c',artist:'d',lyrics:'f',cover:'k',file:'d'}])
    expect(component.playlistIds).toContain(1);
  });
});
