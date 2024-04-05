import { TestBed } from '@angular/core/testing';

import { DescjudicialesService } from './descjudiciales.service';

describe('DescjudicialesService', () => {
  let service: DescjudicialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescjudicialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
