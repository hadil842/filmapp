import { TestBed } from '@angular/core/testing';

import { Filmservice } from './filmservice';

describe('Filmservice', () => {
  let service: Filmservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Filmservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
