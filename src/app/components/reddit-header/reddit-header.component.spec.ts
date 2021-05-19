import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditHeaderComponent } from './reddit-header.component';

describe('RedditHeaderComponent', () => {
  let component: RedditHeaderComponent;
  let fixture: ComponentFixture<RedditHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
