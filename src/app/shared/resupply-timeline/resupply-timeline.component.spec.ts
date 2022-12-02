import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResupplyTimelineComponent } from './resupply-timeline.component';

describe('ResupplyTimelineComponent', () => {
  let component: ResupplyTimelineComponent;
  let fixture: ComponentFixture<ResupplyTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResupplyTimelineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResupplyTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
