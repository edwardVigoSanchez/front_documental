import { TestBed } from '@angular/core/testing';

import { EscalafonariosService } from './escalafonarios.service';

describe('EscalafonariosService', () => {
  let service: EscalafonariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalafonariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
