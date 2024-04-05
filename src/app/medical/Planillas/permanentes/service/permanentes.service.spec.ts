import { TestBed } from '@angular/core/testing';

import { PermanentesService } from './permanentes.service';

describe('PermanentesService', () => {
  let service: PermanentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermanentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
