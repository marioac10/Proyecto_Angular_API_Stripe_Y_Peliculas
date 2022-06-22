import { TestBed } from '@angular/core/testing';

import { StripeInterceptor } from './stripe.interceptor';

describe('StripeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StripeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StripeInterceptor = TestBed.inject(StripeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
