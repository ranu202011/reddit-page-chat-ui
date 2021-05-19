import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditReplyComponent } from './reddit-reply.component';

describe('RedditReplyComponent', () => {
  let component: RedditReplyComponent;
  let fixture: ComponentFixture<RedditReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
