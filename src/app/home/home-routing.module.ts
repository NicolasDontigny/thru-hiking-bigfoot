import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { routeName: 'Home' },
  },
  {
    path: 'sub-home',
    loadChildren: () => import('./sub-home/sub-home.module').then(m => m.SubHomeModule),
    data: { routeName: 'Home' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
