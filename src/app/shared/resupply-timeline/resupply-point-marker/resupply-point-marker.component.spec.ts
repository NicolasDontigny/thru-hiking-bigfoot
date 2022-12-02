import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResupplyPointMarkerComponent } from './resupply-point-marker.component';

describe('ResupplyPointMarkerComponent', () => {
  let component: ResupplyPointMarkerComponent;
  let fixture: ComponentFixture<ResupplyPointMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResupplyPointMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResupplyPointMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
