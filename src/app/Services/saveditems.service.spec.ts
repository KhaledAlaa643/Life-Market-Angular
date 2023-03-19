import { TestBed } from '@angular/core/testing';

import { SaveditemsService } from './saveditems.service';

describe('SaveditemsService', () => {
  let service: SaveditemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveditemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
