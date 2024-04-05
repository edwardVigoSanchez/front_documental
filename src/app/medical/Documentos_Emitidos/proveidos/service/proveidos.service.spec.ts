import { TestBed } from '@angular/core/testing';

import { ProveidosService } from './proveidos.service';

describe('ProveidosService', () => {
  let service: ProveidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
