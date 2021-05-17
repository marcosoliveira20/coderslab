import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRoadmapComponent } from './detail-roadmap.component';

describe('DetailRoadmapComponent', () => {
  let component: DetailRoadmapComponent;
  let fixture: ComponentFixture<DetailRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
