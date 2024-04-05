import { TestBed } from '@angular/core/testing';

import { ExfuncionariosService } from './exfuncionarios.service';

describe('ExfuncionariosService', () => {
  let service: ExfuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExfuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
