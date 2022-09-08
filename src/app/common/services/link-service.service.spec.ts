import { TestBed } from '@angular/core/testing';

import { LinkServiceService } from './link-service.service';

describe('LinkServiceService', () => {
  let service: LinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
