import { TestBed } from '@angular/core/testing';

import { CasindeterminadosService } from './casindeterminados.service';

describe('CasindeterminadosService', () => {
  let service: CasindeterminadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasindeterminadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
