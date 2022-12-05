import { Component, OnInit } from '@angular/core';

export enum ResupplyLocationType {
  town,
  village,
  resort,
}

export enum ResupplyType {
  green,
  yellow,
  orange,
  red,
  blue,
}

export interface ResupplyPointLocation {
  name: string;
  milesFromTrail: number;
  locationType: ResupplyLocationType;
  resupplyType: ResupplyType;
}

export interface ResupplyPoint {
  mileMarker: number;
  locations: ResupplyPointLocation[];
}

@Component({
  selector: 'pct-resupply-timeline',
  templateUrl: './resupply-timeline.component.html',
  styleUrls: ['./resupply-timeline.component.less'],
})
export class ResupplyTimelineComponent implements OnInit {
  resupplyPoints: ResupplyPoint[] = [
    {
      mileMarker: 2623,
      locations: [
        {
          name: 'Mazama',
          milesFromTrail: 18.7,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.yellow,
        },
      ],
    },
    {
      mileMarker: 2572.9,
      locations: [
        {
          name: 'Stehekin',
          milesFromTrail: 10.75,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.red,
        },
      ],
    },
    {
      mileMarker: 2465.2,
      locations: [
        {
          name: 'Stevens Pass',
          milesFromTrail: 0,
          locationType: ResupplyLocationType.resort,
          resupplyType: ResupplyType.green,
        },
      ],
    },
  ];

  ngOnInit(): void {
    console.log('timeline init');
  }
}
