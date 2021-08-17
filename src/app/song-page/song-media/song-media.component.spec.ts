import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongMediaComponent } from './song-media.component';

describe('SongMediaComponent', () => {
  let component: SongMediaComponent;
  let fixture: ComponentFixture<SongMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
