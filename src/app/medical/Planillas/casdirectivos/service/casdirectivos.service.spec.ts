import { TestBed } from '@angular/core/testing';

import { CasdirectivosService } from './casdirectivos.service';

describe('CasdirectivosService', () => {
  let service: CasdirectivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasdirectivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
