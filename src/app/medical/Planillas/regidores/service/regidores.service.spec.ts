import { TestBed } from '@angular/core/testing';

import { RegidoresService } from './regidores.service';

describe('RegidoresService', () => {
  let service: RegidoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegidoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
