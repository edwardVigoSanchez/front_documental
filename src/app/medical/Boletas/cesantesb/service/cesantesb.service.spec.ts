import { TestBed } from '@angular/core/testing';

import { CesantesbService } from './cesantesb.service';

describe('CesantesbService', () => {
  let service: CesantesbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesantesbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
