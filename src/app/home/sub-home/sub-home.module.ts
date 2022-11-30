import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubHomeRoutingModule } from './sub-home-routing.module';

import { SubHomeComponent } from './sub-home.component';

@NgModule({
  declarations: [SubHomeComponent],
  imports: [
    SharedModule,
    SubHomeRoutingModule,
  ],
})
export class SubHomeModule { }
