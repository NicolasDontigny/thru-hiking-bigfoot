import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResupplyPointComponent } from './resupply-point.component';

describe('ResupplyPointComponent', () => {
  let component: ResupplyPointComponent;
  let fixture: ComponentFixture<ResupplyPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResupplyPointComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResupplyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
