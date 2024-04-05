import { TestBed } from '@angular/core/testing';

import { ResogerencialService } from './resogerencial.service';

describe('ResogerencialService', () => {
  let service: ResogerencialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResogerencialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
