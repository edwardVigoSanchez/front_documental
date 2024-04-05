import { TestBed } from '@angular/core/testing';

import { MemorandumService } from './memorandum.service';

describe('MemorandumService', () => {
  let service: MemorandumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorandumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
