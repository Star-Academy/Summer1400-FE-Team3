import { TestBed } from '@angular/core/testing';

import { FetchUserDataService } from './fetch-user-data.service';

describe('FetchDataService', () => {
  let service: FetchUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
