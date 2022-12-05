import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ResupplyPointLocation, ResupplyType } from '../../resupply-timeline.component';
import { ResupplyLocationDetailsComponent } from './resupply-location-details/resupply-location-details.component';

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

  @Input()
  mileMarker!: number;

  @Input()
  hideBorder = false;

  colors: ResupplyColors | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.colors = getResupplyMainColor[this.location.resupplyType];
  }

  openDialog() {
    this.dialog.open(ResupplyLocationDetailsComponent, {
      // width: '400px',
      data: {
        location: this.location,
        mileMarker: this.mileMarker,
      },
    });
  }
}
