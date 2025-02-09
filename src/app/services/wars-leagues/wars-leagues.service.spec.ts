import { TestBed } from '@angular/core/testing';

import { WarsLeaguesService } from './wars-leagues.service';

describe('WarsLeaguesService', () => {
  let service: WarsLeaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarsLeaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
