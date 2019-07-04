import { LoginProviderServiceMock } from './../shared/tests/mocks';
import { LoginProviderService } from './services/login-provider.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, {
        provide: LoginProviderService, useClass: LoginProviderServiceMock
      }]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
