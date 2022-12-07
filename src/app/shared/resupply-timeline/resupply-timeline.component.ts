import { Component, Input, OnInit } from '@angular/core';

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
  description: string;
  recommendations?: string[];
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
  @Input()
  resupplyPoints!: ResupplyPoint[];

  nobo = true;

  ngOnInit(): void {
    // Sort locations at the same mile marker by closest to trail
    this.resupplyPoints.forEach(resupplyPoint => {
      resupplyPoint.locations.sort((a, b) => a.milesFromTrail - b.milesFromTrail);
    });

    // Sort all locations by their mile marker
    this.resupplyPoints.sort((a, b) => this.nobo ? b.mileMarker - a.mileMarker : a.mileMarker - b.mileMarker);
  }
}
