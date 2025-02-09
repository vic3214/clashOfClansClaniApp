import { TestBed } from '@angular/core/testing';

import { WarsService } from './wars.service';

describe('WarsService', () => {
  let service: WarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
