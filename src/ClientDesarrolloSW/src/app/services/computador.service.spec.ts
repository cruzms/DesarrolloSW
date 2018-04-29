import { TestBed, inject } from '@angular/core/testing';

import { ComputadorService } from './computador.service';

describe('ComputadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputadorService]
    });
  });

  it('should be created', inject([ComputadorService], (service: ComputadorService) => {
    expect(service).toBeTruthy();
  }));
});
