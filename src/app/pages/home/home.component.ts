/* eslint-disable max-len */
import { Component } from '@angular/core';
import { ResupplyLocationType, ResupplyPoint, ResupplyType } from 'src/app/shared/resupply-timeline/resupply-timeline.component';

@Component({
  selector: 'pct-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  pctResupplies: ResupplyPoint[] = [
    {
      mileMarker: 2623,
      locations: [
        {
          name: 'Mazama',
          milesFromTrail: 18.7,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.yellow,
          description: "Mazama is a small village, probably the last stop before the border, or first stop if you're sobo. There is a nice café to eat, and the store next to it has some food to make a full resupply although a bit limited and very expensive. Mazama is a favorite simply because of the Lion's Den, a trail angel hosting place that allowed me to get all the information about the trail conditions and alternate route last year. There are a few beds or a lot of camping spots, there's a full kitchen, shower, laundry, and Mary is an amazing host that even cooked some meals or deserts for everyone a few times a week. You can also get a ride or hitch into Winthrop, which has a grocery store and gear shops.",
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
          description: '',
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
          description: '',
        },
        {
          name: 'Skykomish',
          milesFromTrail: 15,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.orange,
          description: '',
        },
        {
          name: 'Leavenworth',
          milesFromTrail: 35.2,
          locationType: ResupplyLocationType.village,
          resupplyType: ResupplyType.yellow,
          description: '',
        },
        {
          name: 'Wenatchee',
          milesFromTrail: 57.7,
          locationType: ResupplyLocationType.town,
          resupplyType: ResupplyType.green,
          description: '',
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
          description: '',
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
          description: '',
        },
        {
          name: 'Packwood',
          milesFromTrail: 19.9,
          locationType: ResupplyLocationType.town,
          resupplyType: ResupplyType.yellow,
          description: '',
        },
      ],
    },
  ];
}
