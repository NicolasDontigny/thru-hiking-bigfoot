import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getResupplyColorLegend } from 'src/app/constants/color-codes.constants';
import { ResupplyColors, ResupplyPointLocation } from 'src/app/models/resupply-point.model';

export interface ResupplyLocationDetails {
  location: ResupplyPointLocation;
  mileMarker: number;
  colors: ResupplyColors | undefined;
}

@Component({
  selector: 'pct-resupply-location-details',
  templateUrl: './resupply-location-details.component.html',
  styleUrls: ['./resupply-location-details.component.less'],
})
export class ResupplyLocationDetailsComponent {
  location: ResupplyPointLocation;
  mileMarker: number;
  colorLegend: string;
  colors: ResupplyColors | undefined;

  constructor(
    public dialogRef: MatDialogRef<ResupplyLocationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) locationDetails: ResupplyLocationDetails,
  ) {
    this.location = locationDetails.location;
    this.mileMarker = locationDetails.mileMarker;
    this.colorLegend = getResupplyColorLegend[locationDetails.location.resupplyType];
    this.colors = locationDetails.colors;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
