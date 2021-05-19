import { TestBed } from '@angular/core/testing';

import { RedditCommentService } from './reddit-comment.service';

describe('RedditCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditCommentService = TestBed.get(RedditCommentService);
    expect(service).toBeTruthy();
  });
});
