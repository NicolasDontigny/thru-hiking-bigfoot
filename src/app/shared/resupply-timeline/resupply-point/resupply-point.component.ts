import { Component, Input, OnInit } from '@angular/core';

import { ResupplyPoint } from '../resupply-timeline.component';

@Component({
  selector: 'pct-resupply-point',
  templateUrl: './resupply-point.component.html',
  styleUrls: ['./resupply-point.component.less'],
})
export class ResupplyPointComponent implements OnInit {
  @Input()
  point!: ResupplyPoint;

  @Input()
  // Will be undefined if resupplyPoint is last in the list
  nextPoint: ResupplyPoint | undefined;

  // colors: ResupplyColors | undefined;
  distanceFromNextResupply: number | undefined;
  heightMileScale = 2;

  ngOnInit() {
    console.log('this.point: ', this.point);
    console.log('this.nextPoint: ', this.nextPoint);

    if (this.nextPoint === undefined) return;

    this.distanceFromNextResupply = this.point.mileMarker - this.nextPoint.mileMarker;
    console.log('this.distanceFromNextResupply: ', this.distanceFromNextResupply);
  }
}
