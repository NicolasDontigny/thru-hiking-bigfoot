import { Component, OnInit } from '@angular/core';
import { ResupplyLocationType, ResupplyPoint, ResupplyType } from 'src/app/shared/resupply-timeline/resupply-timeline.component';

@Component({
  selector: 'pct-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  pctResupplies: ResupplyPoint[] = [
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
          resupplyType: ResupplyType.red,
        },
        {
          name: 'Skykomish',
          milesFromTrail: 15,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.orange,
        },
        {
          name: 'Leavenworth',
          milesFromTrail: 35.2,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.yellow,
        },
        {
          name: 'Wenatchee',
          milesFromTrail: 57.7,
          locationType: ResupplyLocationType.town,
          resupplyType: ResupplyType.green,
        },
      ],
    },
    {
      mileMarker: 2394.1,
      locations: [
        {
          name: 'Snoqualmie Pass',
          milesFromTrail: 0.2,
          locationType: ResupplyLocationType.resort,
          resupplyType: ResupplyType.red,
        },
      ],
    },
    {
      mileMarker: 2295.9,
      locations: [
        {
          name: 'White Pass',
          milesFromTrail: 0.5,
          locationType: ResupplyLocationType.resort,
          resupplyType: ResupplyType.red,
        },
        {
          name: 'Packwood',
          milesFromTrail: 19.9,
          locationType: ResupplyLocationType.town,
          resupplyType: ResupplyType.yellow,
        },
      ],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    console.log('Home Component init');
  }
}
