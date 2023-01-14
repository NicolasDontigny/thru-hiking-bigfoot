
import { Component } from '@angular/core';
import { pctResupplyPoints } from 'src/app/data/pct-resupply-points.data';

@Component({
  selector: 'pct-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  pctResupplyPoints = pctResupplyPoints;

  nobo = true;
}
