import { TestBed } from '@angular/core/testing';

import { ContadorAsistenciaService } from './contador-asistencia.service';

describe('ContadorAsistenciaService', () => {
  let service: ContadorAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
