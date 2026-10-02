import { TestBed } from '@angular/core/testing';

import { SanitizeHtml } from './sanitize-html';

describe('SanitizeHtml', () => {
  let service: SanitizeHtml;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanitizeHtml);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
