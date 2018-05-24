import { TestBed, inject } from '@angular/core/testing';

import { ArchivoService } from './archivo.service';

describe('ArchivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivoService]
    });
  });

  it('should be created', inject([ArchivoService], (service: ArchivoService) => {
    expect(service).toBeTruthy();
  }));
});
