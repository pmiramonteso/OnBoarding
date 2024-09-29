import { TestBed } from '@angular/core/testing';

import { StepsService } from '../servicio/steps.service';

describe('StepsService', () => {
  let service: StepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
