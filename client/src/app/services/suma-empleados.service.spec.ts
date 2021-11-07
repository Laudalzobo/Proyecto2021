import { TestBed } from '@angular/core/testing';

import { SumaEmpleadosService } from './suma-empleados.service';

describe('SumaEmpleadosService', () => {
  let service: SumaEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumaEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
