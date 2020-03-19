import { TestBed } from '@angular/core/testing';

import { DogownerService } from './dogowner.service';

describe('DogownerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogownerService = TestBed.get(DogownerService);
    expect(service).toBeTruthy();
  });
});
