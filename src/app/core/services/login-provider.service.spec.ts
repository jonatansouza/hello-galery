import { TestBed } from '@angular/core/testing';

import { LoginProviderService } from './login-provider.service';

describe('LoginProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginProviderService = TestBed.get(LoginProviderService);
    expect(service).toBeTruthy();
  });
});
