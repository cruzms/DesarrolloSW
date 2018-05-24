import { TestBed, inject } from '@angular/core/testing';

import { ValidardatosService } from './validardatos.service';

describe('ValidardatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidardatosService]
    });
  });

  it('should be created', inject([ValidardatosService], (service: ValidardatosService) => {
    expect(service).toBeTruthy();
  }));
});
