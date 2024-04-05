import { TestBed } from '@angular/core/testing';

import { MemorandumeService } from './memorandume.service';

describe('MemorandumeService', () => {
  let service: MemorandumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorandumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
