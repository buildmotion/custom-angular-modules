import { TestBed, inject } from '@angular/core/testing';

import { SimpleLoggerService } from './simple-logger.service';

describe('SimpleLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleLoggerService]
    });
  });

  it('should be created', inject([SimpleLoggerService], (service: SimpleLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
