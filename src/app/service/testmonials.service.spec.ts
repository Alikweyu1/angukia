import { TestBed } from '@angular/core/testing';

import { TestmonialsService } from './testmonials.service';

describe('TestmonialsService', () => {
  let service: TestmonialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestmonialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
