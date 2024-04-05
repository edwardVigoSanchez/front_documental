import { TestBed } from '@angular/core/testing';

import { CastransitoriosService } from './castransitorios.service';

describe('CastransitoriosService', () => {
  let service: CastransitoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastransitoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
