import { TestBed } from '@angular/core/testing';

import { ResoalcaldiaService } from './resoalcaldia.service';

describe('ResoalcaldiaService', () => {
  let service: ResoalcaldiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResoalcaldiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
