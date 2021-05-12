import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoadmapComponent } from './home-roadmap.component';

describe('HomeRoadmapComponent', () => {
  let component: HomeRoadmapComponent;
  let fixture: ComponentFixture<HomeRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
