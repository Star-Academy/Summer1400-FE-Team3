import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSongsComponent } from './filter-songs.component';

describe('FilterSongsComponent', () => {
  let component: FilterSongsComponent;
  let fixture: ComponentFixture<FilterSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterSongsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update artists', async () => {
    const temp = [
      { id: 1, name: 'c', artist: 'd', lyrics: 'f', cover: 'k', file: 'd' },
      { id: 2, name: 'a', artist: 'l', lyrics: 'f', cover: 'k', file: 'd' },
    ];
    spyOn(
      (component as any).fetchSongDataService,
      'fetchSongs'
    ).and.returnValue(temp);

    await component.ngOnInit();
    expect(component.artists).toEqual(['d', 'l']);
  });
});
