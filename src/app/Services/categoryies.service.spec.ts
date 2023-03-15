import { TestBed } from '@angular/core/testing';

import { CategoryiesService } from './categoryies.service';

describe('CategoryiesService', () => {
  let service: CategoryiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
