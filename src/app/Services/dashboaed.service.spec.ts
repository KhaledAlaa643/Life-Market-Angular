import { TestBed } from '@angular/core/testing';

import { DashboaedService } from './dashboaed.service';

describe('DashboaedService', () => {
  let service: DashboaedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboaedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
