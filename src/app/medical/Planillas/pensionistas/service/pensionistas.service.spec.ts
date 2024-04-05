import { TestBed } from '@angular/core/testing';

import { PensionistasService } from './pensionistas.service';

describe('PensionistasService', () => {
  let service: PensionistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
