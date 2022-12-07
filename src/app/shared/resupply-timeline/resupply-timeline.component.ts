import { Component, Input, OnInit } from '@angular/core';
import { ResupplyPoint } from 'src/app/models/resupply-point.model';

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
