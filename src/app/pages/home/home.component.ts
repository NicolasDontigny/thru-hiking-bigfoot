import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pct-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    console.log('Home Component init');
  }

}
