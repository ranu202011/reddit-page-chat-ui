import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditImageComponent } from './reddit-image.component';

describe('RedditImageComponent', () => {
  let component: RedditImageComponent;
  let fixture: ComponentFixture<RedditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
