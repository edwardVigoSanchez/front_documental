import { TestBed } from '@angular/core/testing';

import { LeyservirService } from './leyservir.service';

describe('LeyservirService', () => {
  let service: LeyservirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeyservirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
