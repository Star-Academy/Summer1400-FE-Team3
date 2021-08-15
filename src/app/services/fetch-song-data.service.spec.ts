import { TestBed } from '@angular/core/testing';

import { FetchSongDataService } from './fetch-song-data.service';

describe('FetchSongDataService', () => {
  let service: FetchSongDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSongDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
