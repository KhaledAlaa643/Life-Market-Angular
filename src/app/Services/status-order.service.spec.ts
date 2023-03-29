import { TestBed } from '@angular/core/testing';

import { StatusOrderService } from './status-order.service';

describe('StatusOrderService', () => {
  let service: StatusOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
