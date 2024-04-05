import { TestBed } from '@angular/core/testing';

import { CasdirectivosbService } from './casdirectivosb.service';

describe('CasdirectivosbService', () => {
  let service: CasdirectivosbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasdirectivosbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
