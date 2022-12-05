import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResupplyLocationComponent } from './resupply-location.component';

describe('ResupplyLocationComponent', () => {
  let component: ResupplyLocationComponent;
  let fixture: ComponentFixture<ResupplyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResupplyLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResupplyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
