import { TestBed } from '@angular/core/testing';

import { SumaMaterialesService } from './suma-materiales.service';

describe('SumaMaterialesService', () => {
  let service: SumaMaterialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumaMaterialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
