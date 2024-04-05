import { TestBed } from '@angular/core/testing';

import { CautelaresService } from './cautelares.service';

describe('CautelaresService', () => {
  let service: CautelaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CautelaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
