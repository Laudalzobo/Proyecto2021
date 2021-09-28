import { TestBed } from '@angular/core/testing';

import { ObrasempleadoService } from './obrasempleado.service';

describe('ObrasempleadoService', () => {
  let service: ObrasempleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObrasempleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
