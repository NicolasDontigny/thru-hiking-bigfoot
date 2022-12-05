import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pct-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less',
    './styles/index.less',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'PCT-Resupply';
}
