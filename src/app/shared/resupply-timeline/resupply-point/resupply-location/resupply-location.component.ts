import { Component, Input, OnInit } from '@angular/core';

import { ResupplyPointLocation, ResupplyType } from '../../resupply-timeline.component';

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
  },
};

@Component({
  selector: 'pct-resupply-location',
  templateUrl: './resupply-location.component.html',
  styleUrls: ['./resupply-location.component.less'],
})
export class ResupplyLocationComponent implements OnInit {
  @Input()
  location!: ResupplyPointLocation;

  colors: ResupplyColors | undefined;
  hideBorder = false;

  constructor() { }

  ngOnInit(): void {
    this.colors = getResupplyMainColor[this.location.resupplyType];
  }
}
