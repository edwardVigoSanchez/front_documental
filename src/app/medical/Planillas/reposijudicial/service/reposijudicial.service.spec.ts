import { TestBed } from '@angular/core/testing';

import { ReposijudicialService } from './reposijudicial.service';

describe('ReposijudicialService', () => {
  let service: ReposijudicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposijudicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
