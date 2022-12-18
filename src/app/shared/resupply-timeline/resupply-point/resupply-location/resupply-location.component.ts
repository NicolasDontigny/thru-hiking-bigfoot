import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getResupplyMainColor } from 'src/app/constants/color-codes.constants';
import { ResupplyColors, ResupplyPointLocation } from 'src/app/models/resupply-point.model';

import { ResupplyLocationDetailsComponent } from './resupply-location-details/resupply-location-details.component';

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
      maxWidth: '50vw',
      data: {
        location: this.location,
        mileMarker: this.mileMarker,
        colors: this.colors,
      },
    });
  }
}
