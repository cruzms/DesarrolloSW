import { TestBed, inject } from '@angular/core/testing';

import { ActividadService } from './actividad.service';

describe('ActividadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActividadService]
    });
  });

  it('should be created', inject([ActividadService], (service: ActividadService) => {
    expect(service).toBeTruthy();
  }));
});
