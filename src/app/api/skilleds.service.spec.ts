import { TestBed } from '@angular/core/testing';

import { SkilledsService } from './skilleds.service';

describe('SkilledsService', () => {
  let service: SkilledsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkilledsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
