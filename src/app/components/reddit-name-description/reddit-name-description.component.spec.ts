import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditNameDescriptionComponent } from './reddit-name-description.component';

describe('RedditNameDescriptionComponent', () => {
  let component: RedditNameDescriptionComponent;
  let fixture: ComponentFixture<RedditNameDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditNameDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditNameDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
