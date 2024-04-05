import { TestBed } from '@angular/core/testing';

import { NombradosbService } from './nombradosb.service';

describe('NombradosbService', () => {
  let service: NombradosbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombradosbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
