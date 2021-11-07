import { TestBed } from '@angular/core/testing';

import { SumaTotalAsistenciasService } from './suma-total-asistencias.service';

describe('SumaTotalAsistenciasService', () => {
  let service: SumaTotalAsistenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumaTotalAsistenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
