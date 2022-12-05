import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ResupplyPointLocation } from '../../../resupply-timeline.component';

export interface ResupplyLocationDetails {
  location: ResupplyPointLocation;
  mileMarker: number;
}

@Component({
  selector: 'pct-resupply-location-details',
  templateUrl: './resupply-location-details.component.html',
  styleUrls: ['./resupply-location-details.component.less'],
})
export class ResupplyLocationDetailsComponent {
  location: ResupplyPointLocation;
  mileMarker: number;

  constructor(
    public dialogRef: MatDialogRef<ResupplyLocationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) locationDetails: ResupplyLocationDetails,
  ) {
    this.location = locationDetails.location;
    this.mileMarker = locationDetails.mileMarker;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
