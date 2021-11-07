import { TestBed } from '@angular/core/testing';

import { SumaObrasService } from './suma-obras.service';

describe('SumaObrasService', () => {
  let service: SumaObrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumaObrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
