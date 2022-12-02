import { Component, Input, OnInit } from '@angular/core';
import { ResupplyPoint, ResupplyType } from '../resupply-timeline.component';

export interface ResupplyColors {
  main: string;
  border: string;
}

export const getResupplyMainColor: { [key in ResupplyType]: ResupplyColors } = {
  [ResupplyType.green]: {
    main: 'lightgreen',
    border: 'green',
  },
  [ResupplyType.yellow]: {
    main: 'yellow',
    border: '#ffd800',
  },
  [ResupplyType.orange]: {
    main: '#ffbb00',
    border: '#ed9200',
  },
  [ResupplyType.red]: {
    main: '#f2946f',
    border: '#ef4b00',
  },
  [ResupplyType.blue]: {
    main: 'lightgreen',
    border: 'green',
  }
}



@Component({
  selector: 'pct-resupply-point',
  templateUrl: './resupply-point.component.html',
  styleUrls: ['./resupply-point.component.less']
})
export class ResupplyPointComponent implements OnInit {
  @Input()
  point!: ResupplyPoint;

  @Input()
  // Will be undefined if resupplyPoint is last in the list
  nextPoint: ResupplyPoint | undefined;

  colors: ResupplyColors | undefined;
  distanceFromNextResupply: number | undefined;
  hideBorder = false;

  ngOnInit() {
    console.log('this.point: ', this.point);
    console.log('this.nextPoint: ', this.nextPoint);

    const firstLocation = this.point.locations[0]
    if (firstLocation === undefined) return;

    this.colors = getResupplyMainColor[firstLocation.resupplyType];

    if (this.nextPoint === undefined) {
      this.hideBorder = true;
      return;
    }

    this.distanceFromNextResupply = this.point.mileMarker - this.nextPoint.mileMarker;
    console.log('this.distanceFromNextResupply: ', this.distanceFromNextResupply);
  }
}
