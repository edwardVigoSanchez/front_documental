import { TestBed } from '@angular/core/testing';

import { ReposijudicialbService } from './reposijudicialb.service';

describe('ReposijudicialbService', () => {
  let service: ReposijudicialbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposijudicialbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
