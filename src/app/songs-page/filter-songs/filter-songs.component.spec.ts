import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSongsComponent } from './filter-songs.component';

describe('FilterSongsComponent', () => {
  let component: FilterSongsComponent;
  let fixture: ComponentFixture<FilterSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
