import { TestBed } from '@angular/core/testing';

import { PracticantesService } from './practicantes.service';

describe('PracticantesService', () => {
  let service: PracticantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
