import { TestBed } from '@angular/core/testing';

import { HeroProviderService } from './hero-provider.service';

describe('HeroProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroProviderService = TestBed.get(HeroProviderService);
    expect(service).toBeTruthy();
  });
});
