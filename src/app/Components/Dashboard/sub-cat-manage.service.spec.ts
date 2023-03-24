import { TestBed } from '@angular/core/testing';

import { SubCatManageService } from '../../Services/sub-cat-manage.service';

describe('SubCatManageService', () => {
  let service: SubCatManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCatManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
