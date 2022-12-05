import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResupplyLocationDetailsComponent } from './resupply-location-details.component';

describe('ResupplyLocationDetailsComponent', () => {
  let component: ResupplyLocationDetailsComponent;
  let fixture: ComponentFixture<ResupplyLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResupplyLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResupplyLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
