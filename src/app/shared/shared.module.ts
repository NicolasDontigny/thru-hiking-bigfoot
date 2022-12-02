import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material/material.module';
import { ResupplyTimelineComponent } from './resupply-timeline/resupply-timeline.component';
import { ResupplyPointMarkerComponent } from './resupply-timeline/resupply-point-marker/resupply-point-marker.component';

// DeclarationsToExport
const components = [
  ResupplyTimelineComponent,
];
const directives: any[] = [];
const pipes: any[] = [];

const declarationsToExport = [
  ...components,
  ...directives,
  ...pipes,
];

const localDeclarations: any[] = [];

const importsToExport = [
  CommonModule,
  FontAwesomeModule,
  FormsModule,
  MaterialModule,
];

const localImports = [RouterModule];

const entryComponents: any[] = [];

@NgModule({
  declarations: [
    ...localDeclarations,
    ...declarationsToExport,
    ResupplyTimelineComponent,
    ResupplyPointMarkerComponent,
  ],
  exports: [
    ...declarationsToExport,
    ...importsToExport,
  ],
  entryComponents: [...entryComponents],
  imports: [
    ...localImports,
    ...importsToExport,
  ],
})
export class SharedModule { }
