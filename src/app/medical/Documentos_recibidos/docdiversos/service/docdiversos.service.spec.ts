import { TestBed } from '@angular/core/testing';

import { DocdiversosService } from './docdiversos.service';

describe('DocdiversosService', () => {
  let service: DocdiversosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocdiversosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
