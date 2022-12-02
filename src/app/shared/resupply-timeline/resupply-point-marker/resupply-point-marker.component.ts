import { Component, Input } from '@angular/core';
import { ResupplyType } from '../resupply-timeline.component';

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
    main: 'lightgreen',
    border: 'green',
  },
  [ResupplyType.orange]: {
    main: 'lightgreen',
    border: 'green',
  },
  [ResupplyType.red]: {
    main: 'lightgreen',
    border: 'green',
  },
  [ResupplyType.blue]: {
    main: 'lightgreen',
    border: 'green',
  }
}



@Component({
  selector: 'pct-resupply-point-marker',
  templateUrl: './resupply-point-marker.component.html',
  styleUrls: ['./resupply-point-marker.component.less']
})
export class ResupplyPointMarkerComponent {
  @Input()
  hideBorder = false;

  @Input()
  set type(type: ResupplyType) {
    this.colors = getResupplyMainColor[type];
  }

  colors: ResupplyColors | undefined;
}
