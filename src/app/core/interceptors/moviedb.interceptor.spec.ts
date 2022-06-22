import { TestBed } from '@angular/core/testing';

import { MoviedbInterceptor } from './moviedb.interceptor';

describe('MoviedbInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MoviedbInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MoviedbInterceptor = TestBed.inject(MoviedbInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
