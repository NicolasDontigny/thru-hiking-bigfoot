import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResupplyPoint } from 'src/app/models/resupply-point.model';

@Component({
  selector: 'pct-resupply-timeline',
  templateUrl: './resupply-timeline.component.html',
  styleUrls: ['./resupply-timeline.component.less'],
})
export class ResupplyTimelineComponent implements OnInit, OnChanges {
  @Input()
  resupplyPoints!: ResupplyPoint[];

  @Input()
  nobo = true;

  ngOnInit(): void {
    this.sortResupplyPoints();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['nobo']) {
      this.sortResupplyPoints();
    }
  }

  private sortResupplyPoints() {
    // Sort locations at the same mile marker by closest to trail
    this.resupplyPoints.forEach(resupplyPoint => {
      resupplyPoint.locations.sort((a, b) => a.milesFromTrail - b.milesFromTrail);
    });

    // Sort all locations by their mile marker
    this.resupplyPoints.sort((a, b) => this.nobo ? a.mileMarker - b.mileMarker : b.mileMarker - a.mileMarker);
  }
}
