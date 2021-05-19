import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCommentReplyComponent } from './reddit-comment-reply.component';

describe('RedditCommentReplyComponent', () => {
  let component: RedditCommentReplyComponent;
  let fixture: ComponentFixture<RedditCommentReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCommentReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCommentReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
