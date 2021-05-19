import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCoomentDashboardComponent } from './reddit-cooment-dashboard.component';

describe('RedditCoomentDashboardComponent', () => {
  let component: RedditCoomentDashboardComponent;
  let fixture: ComponentFixture<RedditCoomentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCoomentDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCoomentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
