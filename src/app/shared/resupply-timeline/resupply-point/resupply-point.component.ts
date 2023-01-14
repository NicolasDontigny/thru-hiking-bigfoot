import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResupplyPoint } from 'src/app/models/resupply-point.model';

@Component({
  selector: 'pct-resupply-point',
  templateUrl: './resupply-point.component.html',
  styleUrls: ['./resupply-point.component.less'],
})
export class ResupplyPointComponent implements OnInit, OnChanges {
  @Input()
  point!: ResupplyPoint;

  @Input()
  // Will be undefined if resupplyPoint is last in the list
  nextPoint: ResupplyPoint | undefined;

  @Input()
  nobo = true;

  // colors: ResupplyColors | undefined;
  distanceFromNextResupply: number | undefined;
  heightMileScale = 2;

  ngOnInit() {
    this.calculateDistance();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['nobo']) {
      this.calculateDistance();
    }
  }

  private calculateDistance() {
    console.log('this.point: ', this.point);
    console.log('this.nextPoint: ', this.nextPoint);
    if (this.nextPoint === undefined) {
      this.distanceFromNextResupply = undefined;
      return;
    }

    this.distanceFromNextResupply = this.nobo
      ? this.nextPoint.mileMarker - this.point.mileMarker
      : this.point.mileMarker - this.nextPoint.mileMarker;
  }
}
