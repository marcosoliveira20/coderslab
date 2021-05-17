import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoadmapComponent } from './new-roadmap.component';

describe('NewRoadmapComponent', () => {
  let component: NewRoadmapComponent;
  let fixture: ComponentFixture<NewRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
