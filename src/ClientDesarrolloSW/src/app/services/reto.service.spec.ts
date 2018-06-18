import { TestBed, inject } from '@angular/core/testing';

import { RetoService } from './reto.service';

describe('RetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetoService]
    });
  });

  it('should be created', inject([RetoService], (service: RetoService) => {
    expect(service).toBeTruthy();
  }));
});
