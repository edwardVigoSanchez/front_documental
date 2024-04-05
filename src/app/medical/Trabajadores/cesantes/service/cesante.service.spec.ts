import { TestBed } from '@angular/core/testing';

import { CesanteService } from './cesante.service';

describe('CesanteService', () => {
  let service: CesanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
