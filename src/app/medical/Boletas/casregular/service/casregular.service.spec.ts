import { TestBed } from '@angular/core/testing';

import { CasregularService } from './casregular.service';

describe('CasregularService', () => {
  let service: CasregularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasregularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
