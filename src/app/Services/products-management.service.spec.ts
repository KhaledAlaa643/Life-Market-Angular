import { TestBed } from '@angular/core/testing';

import { ProductsManagementService } from './products-management.service';

describe('ProductsManagementService', () => {
  let service: ProductsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
