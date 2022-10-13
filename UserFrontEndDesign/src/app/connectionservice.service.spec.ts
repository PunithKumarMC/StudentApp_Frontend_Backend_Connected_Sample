import { TestBed } from '@angular/core/testing';

import { ConnectionserviceService } from './connectionservice.service';

describe('ConnectionserviceService', () => {
  let service: ConnectionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
