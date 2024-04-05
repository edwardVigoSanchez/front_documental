import { TestBed } from '@angular/core/testing';

import { NombradosService } from './nombrados.service';

describe('NombradosService', () => {
  let service: NombradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
