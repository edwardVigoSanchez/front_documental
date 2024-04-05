import { TestBed } from '@angular/core/testing';

import { PermanentesbService } from './permanentesb.service';

describe('PermanentesbService', () => {
  let service: PermanentesbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermanentesbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
